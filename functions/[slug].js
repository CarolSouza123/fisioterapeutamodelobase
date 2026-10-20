// Pagina personalizada do profissional: /nome-do-profissional
// O modelo (HTML) fica embutido aqui, oculto. Os dados vem do KV
// PROFISSIONAIS_KV, salvos pelo painel que esta na raiz do site.

const MODELO = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Landing page para fisioterapeuta</title>
<meta name="description" content="Landing page modelo para fisioterapeutas. Agende sua avaliação pelo WhatsApp.">

<script>window.DADOS = {{DADOS_JSON}};</script>
<script>
/* ================================================================
   ÁREA DE EDIÇÃO DA PÁGINA
   É só aqui que você mexe para personalizar a página.
   Mude apenas o que está entre aspas, sem apagar as aspas,
   as vírgulas ou as chaves. Não precisa mexer em mais nada
   do arquivo.

   IMAGEM: troque o valor de "foto" pelo link da foto ou pelo
   nome do arquivo da foto que você subir neste repositório.
   Exemplo com arquivo: foto: "foto.jpg"
   LINK DO BOTÃO: se você preencher "linkDoBotao", todos os
   botões da página usam esse link. Se deixar vazio, os botões
   usam o WhatsApp do campo "whatsapp" automaticamente.
   ================================================================ */
const PADRAO = {
  nome: "",
  especialidade: "",
  publico: "",
  cidade: "",
  fraseApresentacao: "",
  whatsapp: "[5511999999999]",
  linkDoBotao: "",
  foto: "",
  corDoBotao: "#111111",
  crefito: "",
  endereco: "",
  tituloFaixa1: "Quem já se tratou comigo",
  tituloFaixa2: "O que dizem pacientes que já começaram",
  dores: [
    "Sente dor há semanas e ela sempre volta quando você para de tratar.",
    "Já tentou repouso e remédio, mas o problema continua limitando sua rotina.",
    "Quer voltar a treinar, trabalhar e viver sem depender de analgésico."
  ],
  passos: [
    { titulo: "Avaliação Completa", texto: "Consulta com análise da sua rotina, histórico da dor, testes de movimento e medidas detalhadas para entender a causa do problema." },
    { titulo: "Plano de Tratamento Personalizado", texto: "Criação de um plano exclusivo, ajustado ao seu objetivo, à sua rotina e ao seu ritmo de evolução." },
    { titulo: "Acompanhamento e Suporte", texto: "Sessões com acompanhamento próximo e suporte pelo WhatsApp para dúvidas e ajustes do plano entre uma sessão e outra." }
  ],
  sobre1: "",
  sobre2: "",
  sobre3: "",
  faq: [
    { pergunta: "Em quanto tempo vejo resultado?", resposta: "Cada caso evolui no seu ritmo. Na avaliação, você entende o que está causando o problema e qual é o plano e o prazo estimado para o seu caso, sem promessa milagrosa." },
    { pergunta: "É só para quem sente dor?", resposta: "Não. Além de tratar dor, o acompanhamento serve para recuperar movimento, voltar ao esporte e prevenir que o problema volte." },
    { pergunta: "Preciso de encaminhamento médico?", resposta: "Você pode agendar sua avaliação diretamente, sem encaminhamento. Se já tiver exames ou laudo, traga no dia." },
    { pergunta: "Onde fica o consultório?", resposta: "O endereço completo aparece no rodapé desta página. O atendimento domiciliar, quando oferecido, é confirmado pelo WhatsApp." },
    { pergunta: "Atende plano de saúde?", resposta: "A forma de atendimento e de pagamento é confirmada pelo WhatsApp antes de você agendar, sem surpresa." }
  ]
};
const EDITAR = Object.assign({}, PADRAO, window.DADOS || {});
</script>

<style>
  :root{
    --cor-botao:#111111;
    --cor-destaque:#111111;
    --cor-escura:#111111;
    --cor-clara:#d9d9d9;
    --cor-texto:#141414;
    --cor-suave:#5c5c5c;
    --cor-linha:#e6e6e6;
    --cor-cinza:#d9d9d9;
    --cor-cinza-escuro:#a8a8a8;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;color:var(--cor-texto);background:#fff;line-height:1.55;-webkit-font-smoothing:antialiased}
  .wrap{max-width:1120px;margin:0 auto;padding:0 22px}
  header.topo{padding:26px 0 6px}
  .marca{display:flex;align-items:center;gap:10px;font-weight:800;font-size:21px}
  .marca .bolha{width:38px;height:38px;border-radius:50%;background:var(--cor-destaque);color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px}
  .marca small{display:block;font-size:10px;font-weight:600;letter-spacing:2.5px;color:var(--cor-suave);text-transform:uppercase}
  section{padding:56px 0}
  .hero{display:grid;grid-template-columns:1.05fr .95fr;grid-template-areas:"texto foto" "acao foto";gap:10px 44px;align-items:center;padding-top:30px}
  .hero-texto{grid-area:texto}
  .hero .foto-caixa{grid-area:foto}
  .hero-acao{grid-area:acao;align-self:start;margin-top:14px}
  .hero h1{font-size:clamp(30px,4.6vw,46px);line-height:1.16;font-weight:800;letter-spacing:-.5px}
  .hero p{margin:20px 0 28px;font-size:17px;color:#2c2c2c;max-width:520px}
  .foto-caixa{background:#efefef;border-radius:14px;min-height:340px;display:flex;align-items:center;justify-content:center;overflow:hidden}
  .foto-caixa img{width:100%;height:100%;object-fit:cover;min-height:340px}
  .botao{display:inline-block;background:var(--cor-botao);color:#fff;font-weight:700;font-style:italic;font-size:16px;padding:15px 34px;border-radius:9px;text-decoration:none;min-height:52px}
  .botao-centro{text-align:center;margin-top:34px}
  h2.titulo{font-size:clamp(22px,3vw,28px);font-weight:800;text-align:center;letter-spacing:-.3px}
  .faixa{overflow:hidden;padding:26px 0 4px}
  .faixa-trilha{display:flex;gap:18px;width:max-content;animation:rolar 30s linear infinite}
  .faixa:hover .faixa-trilha{animation-play-state:paused}
  @keyframes rolar{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  .cartao-resultado{width:250px;flex:0 0 auto;display:grid;grid-template-columns:1fr 1fr;border-radius:10px;overflow:hidden;border:1px solid var(--cor-linha)}
  .cartao-resultado .metade{background:var(--cor-cinza);min-height:190px;display:flex;align-items:flex-end;padding:8px;font-size:11px;color:#666}
  .cartao-resultado .metade.escura{background:var(--cor-clara);color:#444}
  .para-voce{max-width:640px;margin:0 auto}
  .para-voce ul{list-style:none;margin-top:30px;display:grid;gap:20px}
  .para-voce li{display:flex;gap:16px;align-items:center;font-size:16.5px}
  .icone-quadrado{width:46px;height:46px;flex:0 0 auto;border-radius:10px;background:var(--cor-clara);color:var(--cor-escura);display:flex;align-items:center;justify-content:center;font-size:21px}
  .passos{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:36px}
  .passo{border:1px solid #cfcfcf;border-radius:12px;padding:26px 24px}
  .passo h3{font-size:18px;font-weight:800;margin:16px 0 10px}
  .passo p{font-size:14.5px;color:#333}
  .sobre{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center}
  .sobre h2{font-size:clamp(24px,3.2vw,32px);font-weight:800;line-height:1.25}
  .sobre p{margin-top:18px;font-size:16px;color:#2c2c2c}
  .sobre .botao{margin-top:26px}
  .faq{max-width:680px;margin:34px auto 0;display:grid;gap:12px}
  .faq details{background:var(--cor-escura);border-radius:9px;overflow:hidden}
  .faq summary{color:#fff;font-weight:700;font-style:italic;font-size:15.5px;text-align:center;padding:17px 20px;cursor:pointer;list-style:none;min-height:54px;display:flex;align-items:center;justify-content:center}
  .faq summary::-webkit-details-marker{display:none}
  .faq details p{color:#e8e8e8;font-size:14.5px;padding:0 22px 20px;text-align:center}
  footer{background:var(--cor-escura);color:#e8e2da;padding:30px 0;text-align:center;font-size:13.5px}
  footer strong{color:#fff}
  .whats-flutuante{position:fixed;right:18px;bottom:18px;width:58px;height:58px;border-radius:50%;background:#25d366;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 22px rgba(0,0,0,.25);z-index:50;text-decoration:none;color:#fff;font-size:26px}
  @media (max-width:820px){
    section{padding:42px 0}
    .hero,.sobre{grid-template-columns:1fr;gap:28px}
    .hero{grid-template-areas:"texto" "foto" "acao"}
    .foto-caixa{min-height:260px}
    .passos{grid-template-columns:1fr}
  }
</style>
</head>
<body>

<header class="topo">
  <div class="wrap">
    <div class="marca">
      <span class="bolha" data-campo="inicial">F</span>
      <span><span data-campo="nome">[Nome do profissional]</span><small>Fisioterapia</small></span>
    </div>
  </div>
</header>

<main>
  <section class="hero wrap">
    <div class="hero-texto">
      <h1 data-titulo></h1>
      <p data-campo="fraseApresentacao"></p>
    </div>
    <div class="foto-caixa"><img data-foto alt="Foto do profissional"></div>
    <div class="hero-acao"><a class="botao" data-botao href="#" target="_blank" rel="noopener">Quero agendar minha avaliação</a></div>
  </section>

  <section style="padding-top:10px" data-secao-faixa>
    <div class="wrap"><h2 class="titulo" data-campo="tituloFaixa1"></h2></div>
    <div class="faixa"><div class="faixa-trilha" data-faixa></div></div>
    <div class="wrap botao-centro"><a class="botao" data-botao href="#" target="_blank" rel="noopener">Quero agendar minha avaliação</a></div>
  </section>

  <section>
    <div class="wrap para-voce">
      <h2 class="titulo">É para você que:</h2>
      <ul data-dores></ul>
      <div class="botao-centro"><a class="botao" data-botao href="#" target="_blank" rel="noopener">Quero agendar minha avaliação</a></div>
    </div>
  </section>

  <section style="padding-top:6px">
    <div class="wrap">
      <h2 class="titulo">Veja como funciona a minha avaliação</h2>
      <div class="passos" data-passos></div>
      <div class="botao-centro"><a class="botao" data-botao href="#" target="_blank" rel="noopener">Quero agendar minha avaliação</a></div>
    </div>
  </section>

  <section style="padding-top:6px" data-secao-faixa>
    <div class="wrap"><h2 class="titulo" data-campo="tituloFaixa2"></h2></div>
    <div class="faixa"><div class="faixa-trilha" data-faixa></div></div>
    <div class="wrap botao-centro"><a class="botao" data-botao href="#" target="_blank" rel="noopener">Quero agendar minha avaliação</a></div>
  </section>

  <section>
    <div class="wrap sobre">
      <div>
        <h2>Quem vai te acompanhar nesse processo</h2>
        <p data-campo="sobre1"></p>
        <p data-campo="sobre2"></p>
        <p data-campo="sobre3"></p>
        <a class="botao" data-botao href="#" target="_blank" rel="noopener">Quero agendar minha avaliação</a>
      </div>
      <div class="foto-caixa"><img data-foto alt="Foto do profissional"></div>
    </div>
  </section>

  <section style="padding-top:6px">
    <div class="wrap">
      <h2 class="titulo">FAQ, Dúvidas frequentes</h2>
      <div class="faq" data-faq></div>
    </div>
  </section>
</main>

<footer>
  <div class="wrap">
    <span data-rodape></span>
    <div data-endereco></div>
  </div>
</footer>

<a class="whats-flutuante" data-botao href="#" target="_blank" rel="noopener" aria-label="Chamar no WhatsApp">✆</a>

<script>
/* Daqui para baixo é o funcionamento da página. Não precisa mexer.
   Os parâmetros do link, quando existirem, têm prioridade sobre a
   ÁREA DE EDIÇÃO: é assim que a amostra personalizada de cada
   lead é gerada sem editar o arquivo. */
(function(){
  var params = new URLSearchParams(location.search);
  ["nome","especialidade","publico","cidade","whatsapp","foto","crefito","endereco"].forEach(function(chave){
    var valor = params.get(chave);
    if (valor) EDITAR[chave] = valor;
  });
  if (params.get("cor")) EDITAR.corDoBotao = params.get("cor");

  document.documentElement.style.setProperty("--cor-botao", EDITAR.corDoBotao);
  // Paleta da pagina: tons da mesma familia da cor do profissional, para
  // os detalhes combinarem com o botao em vez de preto puro.
  (function aplicarPaleta(){
    var hex = String(EDITAR.corDoBotao || "#111111").trim();
    var m = hex.match(/^#?([0-9a-f]{6})$/i);
    if (!m) return;
    var n = parseInt(m[1], 16);
    var r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    function mistura(alvo, f){
      function c(v){ return Math.round(v + (alvo - v) * f); }
      return "rgb(" + c(r) + "," + c(g) + "," + c(b) + ")";
    }
    var raiz = document.documentElement.style;
    raiz.setProperty("--cor-destaque", hex);
    raiz.setProperty("--cor-escura", mistura(0, 0.78));
    raiz.setProperty("--cor-clara", mistura(255, 0.85));
  })();
  document.title = EDITAR.cidade ? EDITAR.nome + " | Fisioterapia em " + EDITAR.cidade : EDITAR.nome + " | Fisioterapia";

  // Regra da pagina: o que nao foi preenchido nao aparece. Nada de texto
  // entre colchetes e nenhuma secao vazia para o visitante.
  function vazio(v){ return !v || !String(v).trim() || /^\\[.*\\]$/.test(String(v).trim()); }
  ["nome","especialidade","publico","cidade","fraseApresentacao","crefito","endereco","sobre1","sobre2","sobre3","foto"].forEach(function(c){
    if (vazio(EDITAR[c])) EDITAR[c] = "";
  });

  // Frase de apresentacao automatica, criada da especialidade quando o
  // profissional nao escreveu a dele.
  function gerarFrase(){
    var esp = (EDITAR.especialidade || "").toLowerCase();
    var beneficio = "se livrar da dor e voltar a viver a sua rotina sem limitação";
    if (esp.indexOf("pilates") !== -1) beneficio = "ganhar força, postura e mobilidade";
    else if (esp.indexOf("esport") !== -1) beneficio = "voltar ao esporte com segurança e desempenho";
    else if (esp.indexOf("coluna") !== -1 || esp.indexOf("dor") !== -1) beneficio = "viver sem dor e recuperar seus movimentos";
    else if (esp.indexOf("geriatr") !== -1 || esp.indexOf("idoso") !== -1) beneficio = "manter o equilíbrio, a força e a independência no dia a dia";
    else if (esp.indexOf("neuro") !== -1) beneficio = "recuperar movimentos e autonomia com acompanhamento próximo";
    else if (esp.indexOf("pélvica") !== -1 || esp.indexOf("pelvica") !== -1 || esp.indexOf("urogineco") !== -1) beneficio = "cuidar da saúde pélvica com discrição e sem constrangimento";
    else if (esp.indexOf("respirat") !== -1) beneficio = "respirar melhor e recuperar sua capacidade física";
    else if (esp.indexOf("pós") !== -1 || esp.indexOf("reabilita") !== -1 || esp.indexOf("ortoped") !== -1) beneficio = "se recuperar com segurança, no seu ritmo";
    var quem = EDITAR.publico ? EDITAR.publico : "pessoas";
    return "Ajudo " + quem + " a " + beneficio + ", com atendimento individual e um plano de tratamento feito para a sua rotina.";
  }
  if (!EDITAR.fraseApresentacao) EDITAR.fraseApresentacao = gerarFrase();
  if (!EDITAR.sobre1 && EDITAR.nome) {
    EDITAR.sobre1 = "Sou " + EDITAR.nome + ", fisioterapeuta" +
      (EDITAR.especialidade ? " especialista em " + EDITAR.especialidade : "") +
      (EDITAR.cidade ? ", e atendo em " + EDITAR.cidade : "") + ".";
  }

  // Titulo principal montado so com as partes que existem.
  var titulo = "Fisioterapeuta";
  if (EDITAR.especialidade) titulo += " especialista em " + EDITAR.especialidade;
  if (EDITAR.publico) titulo += " para " + EDITAR.publico;
  if (EDITAR.cidade) titulo += " em " + EDITAR.cidade;
  document.querySelector("[data-titulo]").textContent = titulo + "!";

  function preencher(campo, valor){
    document.querySelectorAll('[data-campo="' + campo + '"]').forEach(function(el){
      if (!valor) { el.style.display = "none"; return; }
      el.textContent = valor;
    });
  }
  preencher("nome", EDITAR.nome);
  preencher("inicial", (EDITAR.nome.replace(/[\\\\[\\\\]]/g,"").trim().charAt(0) || "F").toUpperCase());
  preencher("fraseApresentacao", EDITAR.fraseApresentacao);
  preencher("sobre1", EDITAR.sobre1);
  preencher("sobre2", EDITAR.sobre2);
  preencher("sobre3", EDITAR.sobre3);
  preencher("tituloFaixa1", EDITAR.tituloFaixa1);
  preencher("tituloFaixa2", EDITAR.tituloFaixa2);

  // Rodape montado: nome e Fisioterapeuta sempre; CREFITO e endereco so
  // quando preenchidos.
  var partesRodape = ["<strong>" + EDITAR.nome + "</strong>", "Fisioterapeuta"];
  if (EDITAR.crefito) partesRodape.push("CREFITO " + EDITAR.crefito);
  document.querySelector("[data-rodape]").innerHTML = partesRodape.join(" · ");
  var divEndereco = document.querySelector("[data-endereco]");
  if (EDITAR.endereco) divEndereco.textContent = EDITAR.endereco; else divEndereco.style.display = "none";

  // Faixas de resultados e depoimentos: sem material real preenchido, as
  // secoes somem em vez de mostrar cartoes vazios.
  if (!EDITAR.resultados || !EDITAR.resultados.length) {
    document.querySelectorAll("[data-secao-faixa]").forEach(function(s){ s.style.display = "none"; });
  }

  // Foto: sem foto, ou com link que nao carrega, a caixa some e o texto
  // ocupa a largura toda.
  function esconderFotos(){
    document.querySelectorAll(".foto-caixa").forEach(function(c){ c.style.display = "none"; });
    document.querySelectorAll(".hero,.sobre").forEach(function(g){ g.style.gridTemplateColumns = "1fr"; g.style.gridTemplateAreas = "none"; });
  }
  if (!EDITAR.foto) { esconderFotos(); }
  else {
    document.querySelectorAll("[data-foto]").forEach(function(img){
      img.onerror = esconderFotos;
      img.src = EDITAR.foto;
    });
  }

  var link = EDITAR.linkDoBotao && EDITAR.linkDoBotao.trim()
    ? EDITAR.linkDoBotao.trim()
    : "https://wa.me/" + String(EDITAR.whatsapp).replace(/\\D/g,"") + "?text=" +
      encodeURIComponent("Olá, " + EDITAR.nome + "! Vi sua página e quero agendar uma avaliação.");
  document.querySelectorAll("[data-botao]").forEach(function(a){ a.href = link; });

  document.querySelectorAll("[data-faixa]").forEach(function(trilha){
    for (var volta = 0; volta < 2; volta++){
      for (var i = 0; i < 5; i++){
        var cartao = document.createElement("div");
        cartao.className = "cartao-resultado";
        cartao.innerHTML = '<div class="metade">[foto]</div><div class="metade escura">[foto]</div>';
        trilha.appendChild(cartao);
      }
    }
  });

  var lista = document.querySelector("[data-dores]");
  EDITAR.dores.forEach(function(dor){
    var li = document.createElement("li");
    var icone = document.createElement("span");
    icone.className = "icone-quadrado";
    icone.textContent = "✓";
    var texto = document.createElement("span");
    texto.textContent = dor;
    li.appendChild(icone);
    li.appendChild(texto);
    lista.appendChild(li);
  });

  var passosBox = document.querySelector("[data-passos]");
  var icones = ["🔎","📋","🤝"];
  EDITAR.passos.forEach(function(passo, i){
    var d = document.createElement("div");
    d.className = "passo";
    var icone = document.createElement("span");
    icone.className = "icone-quadrado";
    icone.textContent = icones[i] || "•";
    var h = document.createElement("h3");
    h.textContent = passo.titulo;
    var p = document.createElement("p");
    p.textContent = passo.texto;
    d.appendChild(icone); d.appendChild(h); d.appendChild(p);
    passosBox.appendChild(d);
  });

  var faqBox = document.querySelector("[data-faq]");
  EDITAR.faq.forEach(function(item){
    var det = document.createElement("details");
    var sum = document.createElement("summary");
    sum.textContent = item.pergunta;
    var p = document.createElement("p");
    p.textContent = item.resposta;
    det.appendChild(sum); det.appendChild(p);
    faqBox.appendChild(det);
  });
})();
</script>
</body>
</html>
`;

const RESERVADOS = new Set(["painel", "api", "modelo", "index", "foto.svg", "favicon.ico"]);

function paginaSimples(titulo, texto) {
  return new Response(
    "<!DOCTYPE html><html lang='pt-BR'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1'><title>" + titulo + "</title></head>" +
    "<body style='font-family:system-ui,Arial,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0'><div style='text-align:center;padding:24px'><h1 style='font-size:22px'>" + titulo + "</h1><p style='color:#555'>" + texto + "</p></div></body></html>",
    { status: 404, headers: { "content-type": "text/html; charset=utf-8" } }
  );
}

export async function onRequest(context) {
  const { request, env, params, next } = context;
  if (request.method !== "GET") return next();
  const slug = decodeURIComponent(params.slug || "").trim().toLowerCase();
  if (!slug || slug.includes(".") || RESERVADOS.has(slug)) return next();
  if (!env.PROFISSIONAIS_KV) {
    return new Response("Painel ainda nao ativado neste site.", { status: 503, headers: { "content-type": "text/plain; charset=utf-8" } });
  }
  const bruto = await env.PROFISSIONAIS_KV.get("prof:" + slug);
  if (!bruto) return paginaSimples("Pagina nao encontrada", "Confira o link e tente de novo.");
  let dados;
  try { dados = JSON.parse(bruto); } catch (e) { return paginaSimples("Pagina indisponivel", "Tente de novo em alguns instantes."); }
  const campos = ["nome","especialidade","publico","cidade","fraseApresentacao","whatsapp","linkDoBotao","foto","corDoBotao","crefito","endereco","tituloFaixa1","tituloFaixa2","sobre1","sobre2","sobre3"];
  const limpo = {};
  for (const c of campos) { if (typeof dados[c] === "string" && dados[c].trim()) limpo[c] = dados[c]; }
  const json = JSON.stringify(limpo).replace(/</g, "\\u003c");
  const pagina = MODELO.replace("{{DADOS_JSON}}", json);
  return new Response(pagina, {
    headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex" }
  });
}
