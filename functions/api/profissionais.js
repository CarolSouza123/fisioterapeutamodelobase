// API do painel: criar, listar e excluir profissionais.
// Protegida pela chave ADMIN_KEY e usando o KV PROFISSIONAIS_KV.

function respostaJson(dados, status) {
  return new Response(JSON.stringify(dados), {
    status: status || 200,
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}

function checarAcesso(context) {
  const { request, env } = context;
  if (!env.PROFISSIONAIS_KV) return respostaJson({ erro: "KV nao vinculado. Vincule o namespace com o nome PROFISSIONAIS_KV nas configuracoes do Cloudflare." }, 503);
  if (!env.ADMIN_KEY) return respostaJson({ erro: "ADMIN_KEY nao configurada nas variaveis do Cloudflare." }, 503);
  if (request.headers.get("x-admin-key") !== env.ADMIN_KEY) return respostaJson({ erro: "Chave errada." }, 401);
  return null;
}

function gerarSlug(nome) {
  return nome
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

const CAMPOS = ["nome","especialidade","publico","cidade","fraseApresentacao","whatsapp","linkDoBotao","foto","corDoBotao","crefito","endereco","tituloFaixa1","tituloFaixa2","sobre1","sobre2","sobre3"];

export async function onRequestGet(context) {
  const bloqueio = checarAcesso(context);
  if (bloqueio) return bloqueio;
  const kv = context.env.PROFISSIONAIS_KV;
  const urlGet = new URL(context.request.url);
  const slugUnico = (urlGet.searchParams.get("slug") || "").trim().toLowerCase();
  if (slugUnico) {
    const brutoUm = await kv.get("prof:" + slugUnico);
    if (!brutoUm) return respostaJson({ erro: "Profissional nao encontrado." }, 404);
    try { return respostaJson({ profissional: JSON.parse(brutoUm), slug: slugUnico }); }
    catch (e) { return respostaJson({ erro: "Registro invalido." }, 500); }
  }
  const lista = await kv.list({ prefix: "prof:" });
  const profissionais = [];
  for (const chave of lista.keys) {
    const bruto = await kv.get(chave.name);
    if (!bruto) continue;
    try {
      const dados = JSON.parse(bruto);
      profissionais.push({ slug: chave.name.replace("prof:", ""), nome: dados.nome || "", cidade: dados.cidade || "", especialidade: dados.especialidade || "", whatsapp: dados.whatsapp || "", criadoEm: dados.criadoEm || "" });
    } catch (e) { /* registro ignorado */ }
  }
  profissionais.sort(function(a, b){ return (b.criadoEm || "").localeCompare(a.criadoEm || ""); });
  return respostaJson({ profissionais: profissionais });
}

export async function onRequestPost(context) {
  const bloqueio = checarAcesso(context);
  if (bloqueio) return bloqueio;
  const kv = context.env.PROFISSIONAIS_KV;
  let corpo;
  try { corpo = await context.request.json(); } catch (e) { return respostaJson({ erro: "Dados invalidos." }, 400); }
  const nome = (corpo.nome || "").trim();
  if (!nome) return respostaJson({ erro: "Falta o nome do profissional." }, 400);
  let slug = gerarSlug((corpo.slug || "").trim() || nome);
  if (!slug) return respostaJson({ erro: "Nao consegui gerar o endereco. Preencha o nome." }, 400);
  const existente = await kv.get("prof:" + slug);
  const agora = new Date().toISOString();
  const dados = { criadoEm: existente ? (JSON.parse(existente).criadoEm || agora) : agora, atualizadoEm: agora };
  for (const campo of CAMPOS) {
    if (typeof corpo[campo] === "string") dados[campo] = corpo[campo].trim();
  }
  dados.nome = nome;
  await kv.put("prof:" + slug, JSON.stringify(dados));
  return respostaJson({ ok: true, slug: slug, caminho: "/" + slug, editou: !!existente });
}

export async function onRequestDelete(context) {
  const bloqueio = checarAcesso(context);
  if (bloqueio) return bloqueio;
  const url = new URL(context.request.url);
  const slug = (url.searchParams.get("slug") || "").trim().toLowerCase();
  if (!slug) return respostaJson({ erro: "Falta o endereco." }, 400);
  await context.env.PROFISSIONAIS_KV.delete("prof:" + slug);
  return respostaJson({ ok: true });
}
