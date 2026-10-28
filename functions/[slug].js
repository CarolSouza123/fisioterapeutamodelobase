// Pagina personalizada do profissional: /nome-do-profissional
// O modelo (HTML) fica embutido aqui, oculto. Os dados vem do KV
// PROFISSIONAIS_KV, salvos pelo painel que esta na raiz do site.

const MODELO = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Landing page para fisioterapeuta</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
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
  areas: "",
  formacao: "",
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
  body{font-family:'Manrope',system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;color:var(--cor-texto);background:#fff;line-height:1.6;-webkit-font-smoothing:antialiased}
  .wrap{max-width:1120px;margin:0 auto;padding:0 22px}
  header.topo{padding:26px 0 6px}
  .marca{display:flex;align-items:center;gap:10px;font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:23px;letter-spacing:.1px}
  .marca .bolha{width:38px;height:38px;border-radius:50%;background:var(--cor-destaque);color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px}
  .marca small{display:block;font-family:'Manrope',sans-serif;font-size:10px;font-weight:700;letter-spacing:3px;color:var(--cor-suave);text-transform:uppercase}
  section{padding:68px 0}
  .hero{display:grid;grid-template-columns:1.05fr .95fr;grid-template-areas:"texto foto" "acao foto";gap:10px 44px;align-items:center;padding-top:30px;padding-bottom:48px}
  .hero-texto{grid-area:texto}
  .hero .foto-caixa{grid-area:foto}
  .hero-acao{grid-area:acao;align-self:start;margin-top:14px}
  .hero h1{font-family:'Fraunces',Georgia,serif;font-size:clamp(32px,4.8vw,50px);line-height:1.12;font-weight:600;letter-spacing:-.2px}
  .hero p{margin:22px 0 30px;font-size:17.5px;color:#33302c;max-width:520px}
  .foto-caixa{background:#efefef;border-radius:26px;min-height:340px;display:flex;align-items:center;justify-content:center;overflow:hidden}
  .hero .foto-caixa{border-radius:180px 180px 26px 26px}
  .foto-caixa img{width:100%;height:100%;object-fit:cover;min-height:340px}
  .botao{display:inline-block;background:var(--cor-botao);color:#fff;font-weight:700;font-size:16px;padding:16px 38px;border-radius:99px;text-decoration:none;min-height:54px;letter-spacing:.2px;box-shadow:0 10px 24px rgba(20,16,10,.16)}
  .botao-centro{text-align:center;margin-top:34px}
  h2.titulo{font-family:'Fraunces',Georgia,serif;font-size:clamp(24px,3.2vw,32px);font-weight:600;text-align:center;letter-spacing:-.2px}
  .faixa{overflow:hidden;padding:26px 0 4px}
  .faixa-trilha{display:flex;gap:18px;width:max-content;animation:rolar 30s linear infinite}
  .faixa:hover .faixa-trilha{animation-play-state:paused}
  @keyframes rolar{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  .cartao-resultado{width:250px;flex:0 0 auto;display:grid;grid-template-columns:1fr 1fr;border-radius:18px;overflow:hidden;border:1px solid var(--cor-linha)}
  .cartao-resultado .metade{background:var(--cor-cinza);min-height:190px;display:flex;align-items:flex-end;padding:8px;font-size:11px;color:#666}
  .cartao-resultado .metade.escura{background:var(--cor-clara);color:#444}
  .para-voce{max-width:640px;margin:0 auto}
  .para-voce ul{list-style:none;margin-top:30px;display:grid;gap:20px}
  .para-voce li{display:flex;gap:16px;align-items:center;font-size:16.5px}
  .icone-quadrado{width:46px;height:46px;flex:0 0 auto;border-radius:50%;background:var(--cor-clara);color:var(--cor-escura);display:flex;align-items:center;justify-content:center;font-size:20px}
  .passos{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:36px}
  .passo{border:1px solid #e3ded6;border-radius:20px;padding:28px 26px;background:#fff;box-shadow:0 6px 18px rgba(20,16,10,.05)}
  .passo h3{font-family:'Fraunces',Georgia,serif;font-size:19px;font-weight:600;margin:16px 0 10px}
  .passo p{font-size:14.5px;color:#333}
  .sobre{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center}
  .sobre h2{font-family:'Fraunces',Georgia,serif;font-size:clamp(26px,3.4vw,36px);font-weight:600;line-height:1.22}
  .sobre p{margin-top:18px;font-size:16px;color:#2c2c2c}
  .sobre .botao{margin-top:26px}
  .faq{max-width:680px;margin:34px auto 0;display:grid;gap:12px}
  .faq details{background:var(--cor-escura);border-radius:16px;overflow:hidden}
  .faq summary{color:#fff;font-weight:600;font-size:15.5px;text-align:center;padding:18px 22px;cursor:pointer;list-style:none;min-height:54px;display:flex;align-items:center;justify-content:center}
  .grid-areas{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:34px}
  .card-area{border:1px solid #e3ded6;border-radius:20px;padding:24px;background:#fff;box-shadow:0 6px 18px rgba(20,16,10,.05)}
  .card-area h3{font-family:'Fraunces',Georgia,serif;font-size:19px;font-weight:600;margin:14px 0 8px}
  .card-area p{font-size:15px;color:#3d3a35}
  .formacao{margin-top:24px;border-top:1px solid var(--cor-linha);padding-top:20px}
  .formacao h3{font-family:'Fraunces',Georgia,serif;font-size:19px;font-weight:600;margin-bottom:12px}
  .formacao ul{list-style:none;display:grid;gap:8px;margin-bottom:14px}
  .formacao li{font-size:15px;padding-left:18px;position:relative}
  .formacao li::before{content:"";position:absolute;left:0;top:9px;width:7px;height:7px;border-radius:50%;background:var(--cor-botao)}
  .formacao .cred{display:flex;gap:10px;font-size:15px;padding:5px 0}
  .formacao .cred strong{font-weight:800;color:var(--cor-escura);min-width:170px}
  @media(max-width:760px){.grid-areas{grid-template-columns:1fr}.formacao .cred{flex-direction:column;gap:1px}.formacao .cred strong{min-width:0}}
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
      <span><span data-campo="nome">[Nome do profissional]</span><small data-rotulo>Fisioterapia</small></span>
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
  </section>

  <section style="background:var(--cor-clara)">
    <div class="wrap para-voce">
      <h2 class="titulo">É para você que:</h2>
      <ul data-dores></ul>
    </div>
  </section>

  <section style="padding-top:6px;background:var(--cor-clara)">
    <div class="wrap">
      <h2 class="titulo">Veja como funciona a minha avaliação</h2>
      <div class="passos" data-passos></div>
    </div>
  </section>

  <section style="padding-top:6px" data-secao-faixa>
    <div class="wrap"><h2 class="titulo" data-campo="tituloFaixa2"></h2></div>
    <div class="faixa"><div class="faixa-trilha" data-faixa></div></div>
  </section>

  <section data-secao-areas>
    <div class="wrap">
      <h2 class="titulo">Áreas de atendimento</h2>
      <div class="grid-areas" data-areas></div>
    </div>
  </section>

  <section>
    <div class="wrap sobre">
      <div>
        <h2>Quem vai te acompanhar nesse processo</h2>
        <p data-campo="sobre1"></p>
        <p data-campo="sobre2"></p>
        <p data-campo="sobre3"></p>
        <div class="formacao" data-formacao></div>
        <a class="botao" data-botao href="#" target="_blank" rel="noopener">Quero agendar minha avaliação</a>
      </div>
      <div class="foto-caixa"><img data-foto2 alt="Foto do profissional em atendimento"></div>
    </div>
  </section>

  <section style="padding-top:6px">
    <div class="wrap">
      <h2 class="titulo">Dúvidas frequentes</h2>
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

  // Regra da pagina: o que nao foi preenchido nao aparece. Nada de texto
  // entre colchetes e nenhuma secao vazia para o visitante.
  function vazio(v){ return !v || !String(v).trim() || /^\\[.*\\]$/.test(String(v).trim()); }
  // Textos colados do Instagram vem com letrinhas estilizadas (unicode
  // matematico) que aparecem numa fonte estranha: normaliza para a letra
  // comum, mantendo os acentos.
  Object.keys(EDITAR).forEach(function(c){
    if (typeof EDITAR[c] === "string" && c !== "foto") {
      EDITAR[c] = EDITAR[c].normalize("NFKD").normalize("NFC");
    }
  });
  ["nome","especialidade","publico","cidade","fraseApresentacao","crefito","endereco","areas","formacao","sobre1","sobre2","sobre3","foto","foto2"].forEach(function(c){
    if (vazio(EDITAR[c])) EDITAR[c] = "";
  });
  var espMinuscula = (EDITAR.especialidade || "").toLowerCase();
  var ehPilates = espMinuscula.indexOf("pilates") !== -1 && espMinuscula.indexOf("fisioterapia") === -1;
  document.title = EDITAR.cidade
    ? EDITAR.nome + " | " + (ehPilates ? "Pilates" : "Fisioterapia") + " em " + EDITAR.cidade
    : EDITAR.nome + " | " + (ehPilates ? "Pilates" : "Fisioterapia");

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
  // A area da pessoa manda no rotulo da pagina: quem e de pilates nao
  // pode sair rotulado como fisioterapia (nem o contrario).
  document.querySelector("[data-rotulo]").textContent = ehPilates ? "Pilates" : "Fisioterapia";
  if (!EDITAR.sobre1 && EDITAR.nome) {
    if (ehPilates) {
      EDITAR.sobre1 = "Sou " + EDITAR.nome + " e dou aulas de " + EDITAR.especialidade +
        (EDITAR.cidade ? " em " + EDITAR.cidade : "") + ".";
    } else {
      EDITAR.sobre1 = "Sou " + EDITAR.nome + ", fisioterapeuta" +
        (EDITAR.especialidade ? " especialista em " + EDITAR.especialidade : "") +
        (EDITAR.cidade ? ", e atendo em " + EDITAR.cidade : "") + ".";
    }
  }

  // Titulo principal montado so com as partes que existem.
  // Titulo padrao definido pela Caroline: so "Especialista em X em Cidade".
  var titulo = "Especialista em " + (EDITAR.especialidade || (ehPilates ? "Pilates" : "Fisioterapia"));
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

  // Areas de atendimento: campo proprio do cadastro ou derivadas da
  // especialidade, para as paginas antigas ganharem a secao sozinhas.
  (function(){
    function descricaoArea(titulo){
      var s = titulo.toLowerCase();
      if (s.indexOf("gestante") !== -1) return "Cuidado adaptado para cada fase da gestação, com segurança para você e para o bebê.";
      if (s.indexOf("idoso") !== -1 || s.indexOf("terceira idade") !== -1) return "Fortalecimento, equilíbrio e autonomia, num ritmo seguro e adaptado.";
      if (s.indexOf("pilates") !== -1) return "Força, postura e mobilidade, com atendimento individual e um plano feito para a sua rotina.";
      if (s.indexOf("fisioterapia") !== -1) return "Avaliação completa e tratamento personalizado para dor, movimento e recuperação.";
      if (s.indexOf("coluna") !== -1 || s.indexOf("dor") !== -1) return "Alívio da dor e recuperação do movimento, com um plano progressivo e acompanhado.";
      if (s.indexOf("esport") !== -1) return "Prevenção de lesões e retorno ao esporte com segurança.";
      if (s.indexOf("cirurg") !== -1 || s.indexOf("operat") !== -1) return "Reabilitação acompanhada em cada etapa da sua recuperação.";
      return "Atendimento individual, com avaliação e um plano feito para você.";
    }
    var lista = [];
    var linhas = (EDITAR.areas || "").split(/\\n+/).map(function(s){ return s.trim(); }).filter(Boolean);
    if (linhas.length) {
      lista = linhas.map(function(l){
        var partes = l.split(/\\s*\\|\\s*/);
        return { titulo: partes[0], descricao: partes[1] || descricaoArea(partes[0]) };
      });
    } else if (EDITAR.especialidade) {
      lista = EDITAR.especialidade.split(/\\s*(?:,| e )\\s*/).filter(Boolean).map(function(tit){
        return { titulo: tit.charAt(0).toUpperCase() + tit.slice(1), descricao: descricaoArea(tit) };
      });
    }
    var secao = document.querySelector("[data-secao-areas]");
    var caixa = document.querySelector("[data-areas]");
    if (!lista.length) { secao.style.display = "none"; return; }
    lista.slice(0, 6).forEach(function(a){
      var card = document.createElement("article");
      card.className = "card-area";
      var icone = document.createElement("span");
      icone.className = "icone-quadrado";
      icone.textContent = "✦";
      var h3 = document.createElement("h3");
      h3.textContent = a.titulo;
      var par = document.createElement("p");
      par.textContent = a.descricao;
      card.appendChild(icone); card.appendChild(h3); card.appendChild(par);
      caixa.appendChild(card);
    });
  })();

  // Formacao e credenciais, dentro do Sobre: linhas do cadastro mais os
  // dados que toda pagina ja tem (especialidade, registro e cidade).
  (function(){
    var caixa = document.querySelector("[data-formacao]");
    var linhas = (EDITAR.formacao || "").split(/\\n+/).map(function(s){ return s.trim(); }).filter(Boolean);
    var creds = [];
    if (EDITAR.especialidade) creds.push(["Especialidade", EDITAR.especialidade]);
    if (EDITAR.crefito) creds.push(["Registro profissional", "CREFITO " + EDITAR.crefito]);
    if (EDITAR.cidade) creds.push(["Atendimento em", EDITAR.cidade]);
    if (!linhas.length && !creds.length) { caixa.style.display = "none"; return; }
    var titulo = document.createElement("h3");
    titulo.textContent = "Formação e credenciais";
    caixa.appendChild(titulo);
    if (linhas.length) {
      var ul = document.createElement("ul");
      linhas.forEach(function(l){
        var li = document.createElement("li");
        li.textContent = l;
        ul.appendChild(li);
      });
      caixa.appendChild(ul);
    }
    creds.forEach(function(par){
      var linha = document.createElement("div");
      linha.className = "cred";
      var rotulo = document.createElement("strong");
      rotulo.textContent = par[0];
      var valor = document.createElement("span");
      valor.textContent = par[1];
      linha.appendChild(rotulo); linha.appendChild(valor);
      caixa.appendChild(linha);
    });
  })();
  preencher("tituloFaixa1", EDITAR.tituloFaixa1);
  preencher("tituloFaixa2", EDITAR.tituloFaixa2);

  // Rodape montado: nome e Fisioterapeuta sempre; CREFITO e endereco so
  // quando preenchidos.
  var partesRodape = ["<strong>" + EDITAR.nome + "</strong>", ehPilates ? "Pilates" : "Fisioterapeuta"];
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
  if (!EDITAR.foto && EDITAR.foto2) { EDITAR.foto = EDITAR.foto2; }
  if (!EDITAR.foto) { esconderFotos(); }
  else {
    document.querySelectorAll("[data-foto]").forEach(function(img){
      img.onerror = esconderFotos;
      img.src = EDITAR.foto;
    });
    document.querySelectorAll("[data-foto2]").forEach(function(img){
      img.onerror = function(){
        if (img.getAttribute("src") !== EDITAR.foto) { img.src = EDITAR.foto; }
        else { esconderFotos(); }
      };
      img.src = EDITAR.foto2 || EDITAR.foto;
    });
  }

  var link = EDITAR.linkDoBotao && EDITAR.linkDoBotao.trim()
    ? EDITAR.linkDoBotao.trim()
    : "https://wa.me/" + String(EDITAR.whatsapp).replace(/\\D/g,"") + "?text=" +
      encodeURIComponent("Olá, " + EDITAR.nome + "! Vi sua página e quero agendar uma avaliação.");
  var temContato = (EDITAR.linkDoBotao && EDITAR.linkDoBotao.trim()) || String(EDITAR.whatsapp || "").replace(/\D/g,"");
  if (!temContato) {
    document.querySelectorAll("[data-botao]").forEach(function(a){ a.style.display = "none"; });
  } else {
    document.querySelectorAll("[data-botao]").forEach(function(a){ a.href = link; });
  }

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

const MODELO_PREMIUM = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fisioterapeuta</title>
<meta name="description" content="Atendimento de fisioterapia com avaliação individual e plano personalizado. Fale pelo WhatsApp.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  :root{
    --cream:#FAF6EF;
    --cream-2:#F3ECDD;
    --cream-3:#EFE6D3;
    --ink:#22302A;
    --ink-soft:#5A665F;
    --accent:#1E4D3B;
    --accent-dark:#143327;
    --accent-soft:#E3EDE6;
    --gold:#C2A059;
    --gold-soft:#F0E6CE;
    --wa:#22A35A;
    --wa-dark:#1B8749;
    --card:#FFFFFF;
    --line:#E5DCC8;
    --radius:22px;
    --shadow:0 18px 45px rgba(34,48,42,.10);
    --shadow-sm:0 8px 24px rgba(34,48,42,.08);
    --max:1160px;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth;scroll-padding-top:96px}
  body{
    font-family:'Manrope',system-ui,-apple-system,sans-serif;
    background:var(--cream);
    color:var(--ink);
    line-height:1.6;
    font-size:16px;
    -webkit-font-smoothing:antialiased;
  }
  img{max-width:100%;display:block}
  a{text-decoration:none;color:inherit}
  .container{width:100%;max-width:var(--max);margin:0 auto;padding:0 24px}
  .serif{font-family:'Fraunces',Georgia,serif}
  .eyebrow{
    display:inline-flex;align-items:center;gap:8px;
    font-size:.72rem;font-weight:800;letter-spacing:.18em;text-transform:uppercase;
    color:var(--accent);
  }
  .eyebrow::before{content:"";width:26px;height:1px;background:var(--gold);display:inline-block}
  .btn{
    display:inline-flex;align-items:center;justify-content:center;gap:10px;
    min-height:52px;padding:14px 28px;border-radius:999px;
    font-weight:800;font-size:.98rem;border:1.5px solid transparent;
    transition:transform .18s ease,box-shadow .18s ease,background .18s ease;
    cursor:pointer;text-align:center;
  }
  .btn:active{transform:scale(.98)}
  .btn-wa{background:var(--wa);color:#fff;box-shadow:0 12px 26px rgba(34,163,90,.28)}
  .btn-wa:hover{background:var(--wa-dark)}
  .btn-outline{border-color:var(--accent);color:var(--accent);background:transparent}
  .btn-outline:hover{background:var(--accent-soft)}
  .btn-light{background:#fff;color:var(--accent);border-color:#fff}
  section{padding:88px 0}
  .section-head{max-width:640px;margin:0 auto 48px;text-align:center}
  .section-head .eyebrow{justify-content:center}
  .section-head .eyebrow::after{content:"";width:26px;height:1px;background:var(--gold);display:inline-block}
  .section-head h2{
    font-family:'Fraunces',Georgia,serif;font-weight:500;
    font-size:clamp(1.9rem,4vw,2.6rem);line-height:1.15;margin:14px 0 12px;color:var(--ink);
  }
  .section-head h2 em{font-style:italic;color:var(--accent)}
  .section-head p{color:var(--ink-soft);font-size:1.02rem}

  /* ---------- Header ---------- */
  header{
    position:fixed;top:0;left:0;right:0;z-index:60;
    background:rgba(250,246,239,.92);backdrop-filter:blur(10px);
    border-bottom:1px solid var(--line);
  }
  .header-in{
    max-width:var(--max);margin:0 auto;padding:14px 24px;
    display:flex;align-items:center;justify-content:space-between;gap:16px;
  }
  .brand{display:flex;align-items:center;gap:12px;min-width:0}
  .monogram{
    width:46px;height:46px;flex:0 0 46px;border-radius:50%;
    background:var(--accent);color:#F5EEDC;
    display:flex;align-items:center;justify-content:center;
    font-family:'Fraunces',Georgia,serif;font-size:1.05rem;font-weight:600;letter-spacing:.04em;
    border:2px solid var(--gold);
  }
  .brand-text{line-height:1.2;min-width:0}
  .brand-text strong{
    font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.02rem;display:block;
    white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
  }
  .brand-text span{font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft);font-weight:700}
  nav.main-nav{display:flex;gap:28px;align-items:center}
  nav.main-nav a{font-weight:700;font-size:.92rem;color:var(--ink);position:relative;padding:6px 0}
  nav.main-nav a::after{content:"";position:absolute;left:0;bottom:0;width:0;height:2px;background:var(--gold);transition:width .2s ease}
  nav.main-nav a:hover::after{width:100%}
  .header-cta{min-height:44px;padding:10px 22px;font-size:.9rem}

  /* ---------- Hero ---------- */
  .hero{
    padding:158px 0 92px;
    background:
      radial-gradient(900px 480px at 85% -10%,var(--cream-3),transparent 60%),
      linear-gradient(180deg,var(--cream) 0%,var(--cream-2) 100%);
    overflow:hidden;
  }
  .hero--chapado{background:var(--cream)}
  .hero-grid{
    display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center;
  }
  .hero--esquerda .hero-text{order:2}
  .hero--esquerda .arch-wrap{order:1}
  .hero--faixa .hero-grid{grid-template-columns:1fr}
  .hero--faixa .arch-wrap{max-width:100%}
  .pill-tag{
    display:inline-flex;align-items:center;gap:8px;
    background:#fff;border:1px solid var(--line);border-radius:999px;
    padding:8px 16px;font-size:.82rem;font-weight:800;color:var(--accent);
    box-shadow:var(--shadow-sm);
  }
  .pill-tag .dot{width:8px;height:8px;border-radius:50%;background:var(--gold)}
  .hero h1{
    font-family:'Fraunces',Georgia,serif;font-weight:500;
    font-size:clamp(2.3rem,5.4vw,3.7rem);line-height:1.08;letter-spacing:-.01em;
    margin:22px 0 18px;color:var(--ink);
  }
  .hero h1 em{font-style:italic;color:var(--accent)}
  .hero .subtitle{font-size:1.08rem;color:var(--ink-soft);max-width:520px;margin-bottom:32px}
  .hero-ctas{display:flex;gap:14px;flex-wrap:wrap}
  .hero-note{margin-top:18px;font-size:.86rem;color:var(--ink-soft);font-weight:600}

  .arch-wrap{position:relative;max-width:440px;margin:0 auto;width:100%}
  .arch{
    border-radius:999px 999px 26px 26px;
    overflow:hidden;position:relative;
    aspect-ratio:4/5;
    background:linear-gradient(160deg,var(--accent) 0%,#2E6B52 55%,var(--gold) 130%);
    box-shadow:var(--shadow);
    border:6px solid #fff;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;
  }
  .arch .initials{
    font-family:'Fraunces',Georgia,serif;font-size:6rem;font-weight:500;color:rgba(255,255,255,.92);
    letter-spacing:.02em;
  }
  .arch .photo-hint{
    position:static;text-align:center;max-width:72%;
    font-size:.7rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.78);line-height:1.5;
  }
  .arch img.arch-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
  .arch--retangulo{border-radius:26px}
  .arch--quadrado{border-radius:26px;aspect-ratio:1/1}
  .arch--faixa{border-radius:26px;aspect-ratio:16/9}
  .about .arch--quadrado{aspect-ratio:1/1}
  .about .arch--faixa{aspect-ratio:16/9}
  .arch-name{
    position:absolute;left:16px;right:16px;bottom:16px;z-index:2;
    background:rgba(255,255,255,.96);border-radius:16px;padding:12px 18px;text-align:center;
    box-shadow:var(--shadow-sm);
  }
  .arch-name strong{font-family:'Fraunces',Georgia,serif;font-size:1rem;font-weight:600;display:block;line-height:1.25}
  .arch-name span{font-size:.78rem;font-weight:700;color:var(--ink-soft);letter-spacing:.06em;text-transform:uppercase}
  .arch-badge{
    position:absolute;top:26px;right:-8px;z-index:2;
    background:#fff;border-radius:999px;padding:9px 16px;
    font-size:.78rem;font-weight:800;color:var(--accent);
    box-shadow:var(--shadow-sm);border:1px solid var(--line);
  }

  /* ---------- Differentials strip ---------- */
  .diffs{padding:0;margin:-46px 0;position:relative;z-index:6}
  .diffs-card{
    background:#fff;border-radius:var(--radius);box-shadow:var(--shadow);
    border:1px solid var(--line);
    display:grid;grid-template-columns:repeat(3,1fr);
    padding:10px 6px;
  }
  .diff-item{
    display:flex;align-items:center;gap:14px;padding:18px 22px;
  }
  .diff-item + .diff-item{border-left:1px solid var(--line)}
  .diff-icon{
    width:52px;height:52px;flex:0 0 52px;border-radius:50%;
    background:var(--gold-soft);color:var(--accent);
    display:flex;align-items:center;justify-content:center;line-height:0;
  }
  .diff-icon svg,.card-icon svg,.info-icon svg{width:26px;height:26px;flex:0 0 auto;display:block;margin:auto}
  .diff-icon svg{width:30px;height:30px}
  .info-icon svg{width:22px;height:22px}
  .about-list .check svg{width:13px;height:13px}
  .diff-item strong{display:block;font-size:.96rem;line-height:1.3}
  .diff-item div span{font-size:.84rem;color:var(--ink-soft);line-height:1.4;display:block}

  /* ---------- Services ---------- */
  .services{background:var(--cream);padding-top:134px}
  .cards{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
  .card{
    background:var(--card);border-radius:var(--radius);padding:32px 30px;
    box-shadow:var(--shadow-sm);border:1px solid #F0E9D8;
    transition:transform .2s ease,box-shadow .2s ease;
  }
  .card:hover{transform:translateY(-4px);box-shadow:var(--shadow)}
  .card-icon{
    width:56px;height:56px;border-radius:18px;background:var(--accent-soft);color:var(--accent);
    display:flex;align-items:center;justify-content:center;font-size:1.45rem;margin-bottom:18px;
  }
  .card h3{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.28rem;line-height:1.25;margin-bottom:8px}
  .card p{color:var(--ink-soft);font-size:.96rem}
  .card .card-link{display:inline-flex;gap:6px;margin-top:16px;font-weight:800;font-size:.9rem;color:var(--accent)}
  .card .card-link:hover{color:var(--gold)}

  /* ---------- How it works ---------- */
  .how{background:var(--cream-2)}
  .steps{
    display:grid;grid-template-columns:repeat(4,1fr);gap:22px;position:relative;
  }
  .steps::before{
    content:"";position:absolute;top:30px;left:12%;right:12%;
    border-top:2px dotted var(--gold);opacity:.7;
  }
  .step{text-align:center;padding:0 8px;position:relative}
  .step-num{
    width:60px;height:60px;margin:0 auto 18px;border-radius:50%;
    background:var(--accent);color:#fff;
    font-family:'Fraunces',Georgia,serif;font-size:1.4rem;font-weight:600;
    display:flex;align-items:center;justify-content:center;
    border:3px solid var(--cream-2);box-shadow:0 0 0 2px var(--gold);
    position:relative;z-index:1;
  }
  .step h3{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.12rem;margin-bottom:6px}
  .step p{font-size:.9rem;color:var(--ink-soft)}

  /* ---------- About ---------- */
  .about-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;align-items:center}
  .about .arch{aspect-ratio:4/4.6}
  .about-text h2{
    font-family:'Fraunces',Georgia,serif;font-weight:500;
    font-size:clamp(1.9rem,4vw,2.5rem);line-height:1.15;margin:14px 0 16px;
  }
  .about-text h2 em{font-style:italic;color:var(--accent)}
  .about-text p{color:var(--ink-soft);margin-bottom:16px}
  .about-list{list-style:none;margin:22px 0 30px;display:grid;gap:12px}
  .about-list li{display:flex;gap:12px;align-items:flex-start;font-weight:600;font-size:.97rem}
  .about-list .check{
    width:24px;height:24px;flex:0 0 24px;border-radius:50%;background:var(--gold-soft);color:var(--accent);
    display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:800;margin-top:2px;
  }

  /* ---------- Contact ---------- */
  .contact{background:var(--cream-2)}
  .contact-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:24px;align-items:stretch}
  .form-card,.info-card{
    background:#fff;border-radius:var(--radius);box-shadow:var(--shadow-sm);
    border:1px solid #F0E9D8;padding:36px 34px;
  }
  .form-card h3,.info-card h3{
    font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.45rem;margin-bottom:6px;
  }
  .form-card > p,.info-card > p{color:var(--ink-soft);font-size:.95rem;margin-bottom:24px}
  .field{margin-bottom:16px}
  .field label{display:block;font-weight:800;font-size:.86rem;margin-bottom:7px}
  .field input,.field textarea{
    width:100%;border:1.5px solid var(--line);border-radius:14px;
    padding:14px 16px;font-family:inherit;font-size:1rem;background:var(--cream);
    color:var(--ink);outline:none;transition:border-color .15s ease,background .15s ease;
  }
  .field input:focus,.field textarea:focus{border-color:var(--accent);background:#fff}
  .field textarea{resize:vertical;min-height:104px}
  .form-card .btn{width:100%}
  .form-note{font-size:.8rem;color:var(--ink-soft);text-align:center;margin-top:12px}
  .info-item{display:flex;gap:14px;padding:15px 0;border-bottom:1px solid #F1EBDB;align-items:flex-start}
  .info-item:last-of-type{border-bottom:none}
  .info-icon{
    width:44px;height:44px;flex:0 0 44px;border-radius:50%;background:var(--accent-soft);color:var(--accent);
    display:flex;align-items:center;justify-content:center;font-size:1.1rem;
  }
  .info-item strong{display:block;font-size:.82rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-soft)}
  .info-item span{font-weight:700;font-size:1rem}
  .info-item a:hover{color:var(--accent)}

  /* ---------- Footer ---------- */
  footer{background:var(--accent-dark);color:#DCE7DF;padding:64px 0 110px}
  .footer-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:40px}
  footer .brand-text strong{color:#fff}
  footer .brand-text span{color:#A9BFB2}
  footer h4{font-family:'Fraunces',Georgia,serif;font-weight:600;color:#fff;font-size:1.05rem;margin-bottom:14px}
  footer p,footer a{font-size:.92rem;color:#C4D4C9}
  footer nav{display:grid;gap:9px}
  footer nav a:hover{color:var(--gold)}
  .footer-bottom{
    margin-top:44px;padding-top:22px;border-top:1px solid rgba(255,255,255,.14);
    display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;font-size:.82rem;color:#9DB4A5;
  }

  /* ---------- Floating WhatsApp ---------- */
  .wa-float{
    position:fixed;right:20px;bottom:20px;z-index:70;
    width:60px;height:60px;border-radius:50%;
    background:var(--wa);color:#fff;
    display:flex;align-items:center;justify-content:center;
    box-shadow:0 14px 30px rgba(34,163,90,.38);
    transition:transform .18s ease,background .18s ease;
  }
  .wa-float:hover{background:var(--wa-dark);transform:translateY(-3px)}
  .wa-float svg{width:30px;height:30px;fill:#fff}
  .wa-float:focus-visible,.btn:focus-visible,a:focus-visible{outline:3px solid var(--gold);outline-offset:3px}

  /* ---------- Responsive ---------- */
  @media (max-width:1024px){
    .hero-grid{gap:40px}
    .steps{grid-template-columns:repeat(2,1fr);gap:34px 22px}
    .steps::before{display:none}
    .footer-grid{grid-template-columns:1fr 1fr}
  }
  @media (max-width:860px){
    section{padding:64px 0}
    .services{padding-top:112px}
    .hero{padding-bottom:76px}
    nav.main-nav{display:none}
    .hero{padding-top:126px}
    .hero-grid{grid-template-columns:1fr;gap:44px}
    .hero .subtitle{max-width:100%}
    .about-grid{grid-template-columns:1fr;gap:40px}
    .contact-grid{grid-template-columns:1fr}
    .cards{grid-template-columns:1fr}
    .diffs{margin:-36px 0}
    .diffs-card{grid-template-columns:1fr;padding:6px 4px}
    .diff-item + .diff-item{border-left:none;border-top:1px solid var(--line)}
    .arch-wrap{max-width:360px}
    .hero--faixa .arch-wrap{max-width:100%}
  }
  @media (max-width:520px){
    .container{padding:0 18px}
    .header-in{padding:12px 16px}
    .brand-text strong{font-size:.92rem;max-width:150px}
    .header-cta{padding:10px 16px;font-size:.84rem;min-height:42px}
    .hero-ctas{flex-direction:column}
    .hero-ctas .btn{width:100%}
    .steps{grid-template-columns:1fr}
    .footer-grid{grid-template-columns:1fr;gap:30px}
    .form-card,.info-card{padding:28px 22px}
    .card{padding:26px 22px}
    .wa-float{width:56px;height:56px;right:16px;bottom:16px}
    footer{padding-bottom:96px}
  }
</style>
</head>
<body>

<!-- ================= HEADER ================= -->
<header>
  <div class="header-in">
    <a class="brand" href="#inicio" aria-label="Voltar ao início">
      <span class="monogram" data-monograma aria-hidden="true">F</span>
      <span class="brand-text">
        <strong data-nome>Fisioterapeuta</strong>
        <span data-marca-sub>Fisioterapeuta</span>
      </span>
    </a>
    <nav class="main-nav" aria-label="Navegação principal">
      <a href="#servicos" data-nav="servicos">Serviços</a>
      <a href="#como-funciona">Como funciona</a>
      <a href="#sobre">Sobre</a>
      <a href="#contato">Contato</a>
    </nav>
    <a class="btn btn-wa header-cta" data-wa href="#" target="_blank" rel="noopener">WhatsApp</a>
  </div>
</header>

<main id="inicio">

  <!-- ================= HERO ================= -->
  <div class="hero">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-text">
          <span class="pill-tag"><span class="dot" aria-hidden="true"></span><span data-pill>Fisioterapia</span></span>
          <h1>Movimento sem dor, com o cuidado que <em>você merece</em></h1>
          <p class="subtitle" data-frase>Avaliação individual, plano de tratamento feito para a sua rotina e acompanhamento de perto em cada etapa da sua recuperação.</p>
          <div class="hero-ctas">
            <a class="btn btn-wa" data-wa href="#" target="_blank" rel="noopener">Agendar uma avaliação</a>
            <a class="btn btn-outline" href="#sobre">Conheça meu trabalho</a>
          </div>
          <p class="hero-note">Atendimento com hora marcada · Resposta pelo WhatsApp em horário comercial</p>
        </div>

        <div class="arch-wrap">
          <div class="arch" data-arco="hero" role="img" aria-label="Foto da profissional">
            <span class="photo-hint">Foto da profissional</span>
            <span class="initials" data-iniciais aria-hidden="true">F</span>
            <div class="arch-name">
              <strong data-nome>Fisioterapeuta</strong>
              <span data-arco-sub>Fisioterapeuta</span>
            </div>
          </div>
          <span class="arch-badge" data-cidade></span>
        </div>
      </div>
    </div>
  </div>

  <!-- Differentials strip -->
  <div class="diffs" aria-label="Diferenciais">
    <div class="container">
        <div class="diffs-card">
          <div class="diff-item">
            <span class="diff-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4a3 3 0 0 1 6 0"/><path d="m9 13 2 2 4-4"/></svg></span>
            <div><strong>Avaliação individual</strong><span>Seu caso ouvido com calma, sem pressa</span></div>
          </div>
          <div class="diff-item">
            <span class="diff-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg></span>
            <div><strong>Plano personalizado</strong><span>Tratamento montado para o seu objetivo</span></div>
          </div>
          <div class="diff-item">
            <span class="diff-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="m9.5 15.5 2 2 3.5-3.5"/></svg></span>
            <div><strong>Agendamento fácil</strong><span>Marque sua avaliação direto pelo WhatsApp</span></div>
          </div>
        </div>
    </div>
  </div>

  <!-- ================= SERVICES ================= -->
  <section class="services" id="servicos">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Serviços</span>
        <h2>Como posso te <em>ajudar</em></h2>
        <p>Atendimentos pensados para aliviar a dor, recuperar o movimento e devolver qualidade de vida ao seu dia a dia.</p>
      </div>
      <div class="cards" data-areas></div>
    </div>
  </section>

  <!-- ================= HOW IT WORKS ================= -->
  <section class="how" id="como-funciona">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Como funciona</span>
        <h2>Simples do primeiro contato <em>à sua evolução</em></h2>
        <p>Você sabe exatamente o que esperar em cada etapa do atendimento.</p>
      </div>
      <div class="steps">
        <div class="step">
          <div class="step-num" aria-hidden="true">1</div>
          <h3>Contato pelo WhatsApp</h3>
          <p>Você chama no WhatsApp e conta, com suas palavras, o que está sentindo.</p>
        </div>
        <div class="step">
          <div class="step-num" aria-hidden="true">2</div>
          <h3>Avaliação completa</h3>
          <p>Na primeira sessão, avalio seu caso, seu histórico e seus objetivos.</p>
        </div>
        <div class="step">
          <div class="step-num" aria-hidden="true">3</div>
          <h3>Plano de tratamento</h3>
          <p>Você recebe um plano claro, com frequência, técnicas e metas combinadas.</p>
        </div>
        <div class="step">
          <div class="step-num" aria-hidden="true">4</div>
          <h3>Acompanhamento</h3>
          <p>Sua evolução é acompanhada sessão a sessão, com ajustes quando precisar.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= ABOUT ================= -->
  <section id="sobre">
    <div class="container">
      <div class="about-grid">
        <div class="arch-wrap about">
          <div class="arch" data-arco="sobre" role="img" aria-label="Foto da profissional em atendimento">
            <span class="photo-hint">Foto em atendimento</span>
            <span class="initials" data-iniciais aria-hidden="true">F</span>
            <div class="arch-name">
              <strong data-nome>Fisioterapeuta</strong>
              <span data-arco-sub>Fisioterapeuta</span>
            </div>
          </div>
        </div>
        <div class="about-text">
          <span class="eyebrow">Sobre</span>
          <h2>Prazer, eu sou <em data-nome>Fisioterapeuta</em></h2>
          <div data-sobre>
            <p>Atendimento individual, com avaliação cuidadosa e um plano montado para a sua rotina.</p>
          </div>
          <ul class="about-list">
            <li><span class="check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></span>Atendimento individual, um paciente por vez</li>
            <li><span class="check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></span>Explicação clara do tratamento, sem termos difíceis</li>
            <li><span class="check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></span>Horários combinados direto pelo WhatsApp</li>
          </ul>
          <a class="btn btn-wa" data-wa href="#" target="_blank" rel="noopener">Falar comigo no WhatsApp</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= CONTACT ================= -->
  <section class="contact" id="contato">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Contato</span>
        <h2>Conte o que você <em>está sentindo</em></h2>
        <p>Preencha ao lado e a mensagem chega pronta no meu WhatsApp. Se preferir, use um dos canais diretos.</p>
      </div>
      <div class="contact-grid">
        <div class="form-card" id="formCard">
          <h3>Peça sua avaliação</h3>
          <p>Leva menos de um minuto. Ao enviar, você é direcionado ao WhatsApp com a mensagem já preenchida.</p>
          <form id="waForm" novalidate>
            <div class="field">
              <label for="f-nome">Seu nome</label>
              <input id="f-nome" name="nome" type="text" autocomplete="name" placeholder="Como posso te chamar?" required>
            </div>
            <div class="field">
              <label for="f-fone">Seu WhatsApp</label>
              <input id="f-fone" name="telefone" type="tel" autocomplete="tel" inputmode="tel" placeholder="(00) 00000-0000">
            </div>
            <div class="field">
              <label for="f-msg">O que você está sentindo?</label>
              <textarea id="f-msg" name="mensagem" placeholder="Ex.: sinto dor no joelho há algumas semanas e quero agendar uma avaliação." required></textarea>
            </div>
            <button class="btn btn-wa" type="submit">Enviar pelo WhatsApp</button>
            <p class="form-note">Sem compromisso. Seus dados vão só para a conversa no WhatsApp.</p>
          </form>
        </div>

        <div class="info-card">
          <h3>Fale comigo</h3>
          <p>Canais diretos para agendar, tirar dúvidas ou conhecer o espaço.</p>
          <div class="info-item">
            <span class="info-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13 1 .36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.85.57 2.8.7A2 2 0 0 1 22 16.9z"/></svg></span>
            <div><strong>WhatsApp</strong><span><a data-wa data-wa-texto href="#" target="_blank" rel="noopener">Chamar no WhatsApp</a></span></div>
          </div>
          <div class="info-item">
            <span class="info-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
            <div><strong>Onde atendo</strong><span data-endereco></span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>

<!-- ================= FOOTER ================= -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="brand" href="#inicio" aria-label="Voltar ao início">
          <span class="monogram" data-monograma aria-hidden="true">F</span>
          <span class="brand-text">
            <strong data-nome>Fisioterapeuta</strong>
            <span data-marca-sub>Fisioterapeuta</span>
          </span>
        </a>
        <p style="margin-top:18px;max-width:340px" data-rodape-texto>Atendimento de fisioterapia com avaliação individual e plano personalizado.</p>
      </div>
      <div>
        <h4>Navegação</h4>
        <nav aria-label="Links do rodapé">
          <a href="#servicos" data-nav="servicos">Serviços</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
      <div>
        <h4>Contato</h4>
        <p><span data-rodape-wa></span><br>
        <span data-rodape-end></span></p>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-rodape-copy>Todos os direitos reservados.</span>
      <span data-crefito></span>
      <span>Conteúdo informativo. Em caso de dor intensa ou emergência, procure atendimento imediato.</span>
    </div>
  </div>
</footer>

<!-- Floating WhatsApp -->
<a class="wa-float" data-wa href="#" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.4 7L4.6 29l7.3-1.8c1.3.4 2.7.6 4.1.6 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm0 21.7c-1.3 0-2.6-.2-3.8-.7l-.3-.1-4.3 1.1 1.1-4.1-.2-.3a9.7 9.7 0 0 1-2-5.7C6.5 9.6 10.8 5.3 16 5.3S25.5 9.6 25.5 14.9 21.2 24.7 16 24.7zm5.3-7.2c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1a11.6 11.6 0 0 1-5.7-5c-.4-.7.4-.6 1.1-2.1.1-.3 0-.5 0-.6l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>
</a>

<script>window.DADOS = {{DADOS_JSON}};</script>
<script>
(function(){
  var D = window.DADOS || {};
  function v(s){ return (s || "").toString().trim(); }
  function soDigitos(s){ return (s || "").split("").filter(function(c){ return c >= "0" && c <= "9"; }).join(""); }
  function formatar(d){
    if (d.length === 13) return "(" + d.slice(2, 4) + ") " + d.slice(4, 9) + "-" + d.slice(9);
    if (d.length === 12) return "(" + d.slice(2, 4) + ") " + d.slice(4, 8) + "-" + d.slice(8);
    if (d.length === 11) return "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
    return d;
  }
  function misturar(hex, alvo, pct){
    var n = parseInt(hex.slice(1), 16);
    var r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    var t = parseInt(alvo.slice(1), 16);
    var tr = (t >> 16) & 255, tg = (t >> 8) & 255, tb = t & 255;
    var m = function(a, c){ return Math.round(a + (c - a) * pct); };
    return "rgb(" + m(r, tr) + "," + m(g, tg) + "," + m(b, tb) + ")";
  }
  function esconder(el){ if (el) el.style.display = "none"; }

  var nome = v(D.nome), esp = v(D.especialidade), cid = v(D.cidade);

  if (nome) {
    document.title = nome + (cid ? " | Fisioterapeuta em " + cid : " | Fisioterapeuta");
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", nome + (esp ? " - " + esp : "") + (cid ? " em " + cid + ". " : ". ") + "Atendimento com avaliação individual e plano personalizado. Fale pelo WhatsApp.");
  }
  document.querySelectorAll("[data-nome]").forEach(function(el){ el.textContent = nome || "Fisioterapeuta"; });
  var ini = nome.split(" ").filter(Boolean).slice(0, 2).map(function(p){ return p.charAt(0).toUpperCase(); }).join("") || "F";
  document.querySelectorAll("[data-monograma]").forEach(function(el){ el.textContent = ini; });
  document.querySelectorAll("[data-iniciais]").forEach(function(el){ el.textContent = ini; });
  document.querySelectorAll("[data-cidade]").forEach(function(el){
    if (cid) el.textContent = cid; else esconder(el);
  });
  document.querySelectorAll("[data-marca-sub]").forEach(function(el){
    el.textContent = "Fisioterapeuta" + (cid ? " · " + cid : "");
  });
  document.querySelectorAll("[data-arco-sub]").forEach(function(el){
    el.textContent = esp || "Fisioterapeuta";
  });
  var pill = document.querySelector("[data-pill]");
  if (pill) pill.textContent = [esp, cid].filter(Boolean).join(" · ") || "Fisioterapia";
  var fraseEl = document.querySelector("[data-frase]");
  if (fraseEl && v(D.fraseApresentacao)) fraseEl.textContent = v(D.fraseApresentacao);

  function porFoto(arco, src){
    if (!arco || !src) return;
    var img = document.createElement("img");
    img.className = "arch-img";
    img.src = src;
    img.alt = nome || "Foto da profissional";
    arco.insertBefore(img, arco.firstChild);
    arco.querySelectorAll(".photo-hint,.initials").forEach(function(el){ el.style.display = "none"; });
  }
  porFoto(document.querySelector('[data-arco="hero"]'), v(D.foto));
  porFoto(document.querySelector('[data-arco="sobre"]'), v(D.foto2) || v(D.foto));

  var formato = ["arco", "retangulo", "quadrado", "faixa"].indexOf(v(D.formatoFoto)) >= 0 ? v(D.formatoFoto) : "arco";
  if (formato !== "arco") {
    document.querySelectorAll(".arch").forEach(function(a){ a.classList.add("arch--" + formato); });
  }
  var hero = document.querySelector(".hero");
  if (hero) {
    if (v(D.ladoHero) === "esquerda") hero.classList.add("hero--esquerda");
    if (v(D.fundo) === "chapado") hero.classList.add("hero--chapado");
    if (formato === "faixa") hero.classList.add("hero--faixa");
  }

  var ICONES = [
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.7 9.7 0 0 0-6.7 2.7L3 8"/><path d="M3 3v5h5"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20Z"/><path d="M9.5 21v-7h5v7"/></svg>'
  ];
  var cardsBox = document.querySelector("[data-areas]");
  var linhas = v(D.areas).split(String.fromCharCode(10)).map(function(linha){
    var partes = linha.split("|");
    return { t: v(partes[0]), d: v(partes.slice(1).join("|")) };
  }).filter(function(l){ return !!l.t; });
  if (cardsBox) {
    if (!linhas.length) {
      esconder(document.getElementById("servicos"));
      document.querySelectorAll('[data-nav="servicos"]').forEach(function(a){ esconder(a); });
    } else {
      linhas.forEach(function(l, i){
        var art = document.createElement("article");
        art.className = "card";
        var ic = document.createElement("div");
        ic.className = "card-icon";
        ic.setAttribute("aria-hidden", "true");
        ic.innerHTML = ICONES[i % ICONES.length];
        var h = document.createElement("h3");
        h.textContent = l.t;
        var a = document.createElement("a");
        a.className = "card-link";
        a.href = "#contato";
        a.textContent = "Quero saber mais →";
        art.appendChild(ic);
        art.appendChild(h);
        if (l.d) {
          var p = document.createElement("p");
          p.textContent = l.d;
          art.appendChild(p);
        }
        art.appendChild(a);
        cardsBox.appendChild(art);
      });
    }
  }

  var sobreBox = document.querySelector("[data-sobre]");
  var paras = [D.sobre1, D.sobre2, D.sobre3].map(v).filter(Boolean);
  if (sobreBox) {
    if (!paras.length) {
      esconder(sobreBox);
    } else {
      sobreBox.innerHTML = "";
      paras.forEach(function(t){
        var p = document.createElement("p");
        p.textContent = t;
        sobreBox.appendChild(p);
      });
    }
  }

  var dig = soDigitos(D.whatsapp);
  var link = v(D.linkDoBotao);
  var temContato = !!(dig || link);
  var msg = "Olá" + (nome ? ", " + nome : "") + "! Vim pelo seu site e quero agendar uma avaliação.";
  var hrefWa = link ? link : (dig ? "https://wa.me/" + dig + "?text=" + encodeURIComponent(msg) : "#");
  document.querySelectorAll("[data-wa]").forEach(function(a){
    if (!temContato) { esconder(a); return; }
    a.setAttribute("href", hrefWa);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });
  var formCard = document.getElementById("formCard");
  if (!dig && formCard) esconder(formCard);
  if (!temContato) {
    var grid = document.querySelector(".contact-grid");
    if (grid) grid.style.gridTemplateColumns = "1fr";
  }
  var waTexto = document.querySelector("[data-wa-texto]");
  if (waTexto) {
    if (!temContato) {
      esconder(waTexto.closest(".info-item"));
    } else {
      waTexto.textContent = dig ? formatar(dig) : "Chamar no WhatsApp";
      waTexto.setAttribute("href", hrefWa);
    }
  }
  var endTxt = v(D.endereco) || cid;
  var endEl = document.querySelector("[data-endereco]");
  if (endEl) {
    if (!endTxt) esconder(endEl.closest(".info-item"));
    else endEl.textContent = endTxt;
  }
  var rodapeWa = document.querySelector("[data-rodape-wa]");
  if (rodapeWa) rodapeWa.textContent = dig ? "WhatsApp: " + formatar(dig) : (temContato ? "WhatsApp: chamar pelo botão" : "");
  var rodapeEnd = document.querySelector("[data-rodape-end]");
  if (rodapeEnd) rodapeEnd.textContent = endTxt;
  var copyEl = document.querySelector("[data-rodape-copy]");
  if (copyEl) copyEl.textContent = "© " + new Date().getFullYear() + (nome ? " " + nome : "") + ". Todos os direitos reservados.";
  var crefEl = document.querySelector("[data-crefito]");
  if (crefEl) {
    if (v(D.crefito)) crefEl.textContent = "CREFITO " + v(D.crefito);
    else esconder(crefEl);
  }
  var rodapeTxt = document.querySelector("[data-rodape-texto]");
  if (rodapeTxt) rodapeTxt.textContent = "Atendimento de fisioterapia com avaliação individual e plano personalizado" + (cid ? " em " + cid + "." : ".");

  var cor = /^#[0-9a-fA-F]{6}$/.test(v(D.corDoBotao)) ? v(D.corDoBotao) : "#1E4D3B";
  var root = document.documentElement;
  root.style.setProperty("--accent", cor);
  root.style.setProperty("--accent-dark", misturar(cor, "#000000", 0.35));
  root.style.setProperty("--accent-soft", misturar(cor, "#ffffff", 0.88));

  var anoEl = document.getElementById("ano");
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  var form = document.getElementById("waForm");
  if (form && dig) {
    form.addEventListener("submit", function(ev){
      ev.preventDefault();
      var nomeV = document.getElementById("f-nome").value.trim();
      var fone = document.getElementById("f-fone").value.trim();
      var mensagem = document.getElementById("f-msg").value.trim();
      if (!nomeV || !mensagem) {
        alert("Preencha seu nome e o que você está sentindo para eu te atender melhor.");
        return;
      }
      var partesTexto = ["Olá! Meu nome é " + nomeV + ".", mensagem];
      if (fone) partesTexto.push("Meu WhatsApp é " + fone + ".");
      partesTexto.push("Vim pelo seu site e quero saber mais sobre a avaliação.");
      var texto = partesTexto.join(String.fromCharCode(10));
      window.open("https://wa.me/" + dig + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
    });
  }
})();
</script>
</body>
</html>
`;

const MODELO_SEMFOTO = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fisioterapeuta</title>
<meta name="description" content="Atendimento de fisioterapia com avaliação individual e plano personalizado. Fale pelo WhatsApp.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  :root{
    --cream:#FAF6EF;
    --cream-2:#F3ECDD;
    --cream-3:#EFE6D3;
    --ink:#22302A;
    --ink-soft:#5A665F;
    --accent:#1E4D3B;
    --accent-dark:#143327;
    --accent-soft:#E3EDE6;
    --gold:#C2A059;
    --gold-soft:#F0E6CE;
    --wa:#22A35A;
    --wa-dark:#1B8749;
    --card:#FFFFFF;
    --line:#E5DCC8;
    --radius:22px;
    --shadow:0 18px 45px rgba(34,48,42,.10);
    --shadow-sm:0 8px 24px rgba(34,48,42,.08);
    --max:1160px;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth;scroll-padding-top:96px}
  body{
    font-family:'Manrope',system-ui,-apple-system,sans-serif;
    background:var(--cream);
    color:var(--ink);
    line-height:1.6;
    font-size:16px;
    -webkit-font-smoothing:antialiased;
  }
  img{max-width:100%;display:block}
  a{text-decoration:none;color:inherit}
  .container{width:100%;max-width:var(--max);margin:0 auto;padding:0 24px}
  .serif{font-family:'Fraunces',Georgia,serif}
  .eyebrow{
    display:inline-flex;align-items:center;gap:8px;
    font-size:.72rem;font-weight:800;letter-spacing:.18em;text-transform:uppercase;
    color:var(--accent);
  }
  .eyebrow::before{content:"";width:26px;height:1px;background:var(--gold);display:inline-block}
  .btn{
    display:inline-flex;align-items:center;justify-content:center;gap:10px;
    min-height:52px;padding:14px 28px;border-radius:999px;
    font-weight:800;font-size:.98rem;border:1.5px solid transparent;
    transition:transform .18s ease,box-shadow .18s ease,background .18s ease;
    cursor:pointer;text-align:center;
  }
  .btn:active{transform:scale(.98)}
  .btn-wa{background:var(--wa);color:#fff;box-shadow:0 12px 26px rgba(34,163,90,.28)}
  .btn-wa:hover{background:var(--wa-dark)}
  .btn-outline{border-color:var(--accent);color:var(--accent);background:transparent}
  .btn-outline:hover{background:var(--accent-soft)}
  .btn-light{background:#fff;color:var(--accent);border-color:#fff}
  section{padding:88px 0}
  .section-head{max-width:640px;margin:0 auto 48px;text-align:center}
  .section-head .eyebrow{justify-content:center}
  .section-head .eyebrow::after{content:"";width:26px;height:1px;background:var(--gold);display:inline-block}
  .section-head h2{
    font-family:'Fraunces',Georgia,serif;font-weight:500;
    font-size:clamp(1.9rem,4vw,2.6rem);line-height:1.15;margin:14px 0 12px;color:var(--ink);
  }
  .section-head h2 em{font-style:italic;color:var(--accent)}
  .section-head p{color:var(--ink-soft);font-size:1.02rem}

  /* ---------- Header ---------- */
  header{
    position:fixed;top:0;left:0;right:0;z-index:60;
    background:rgba(250,246,239,.92);backdrop-filter:blur(10px);
    border-bottom:1px solid var(--line);
  }
  .header-in{
    max-width:var(--max);margin:0 auto;padding:14px 24px;
    display:flex;align-items:center;justify-content:space-between;gap:16px;
  }
  .brand{display:flex;align-items:center;gap:12px;min-width:0}
  .monogram{
    width:46px;height:46px;flex:0 0 46px;border-radius:50%;
    background:var(--accent);color:#F5EEDC;
    display:flex;align-items:center;justify-content:center;
    font-family:'Fraunces',Georgia,serif;font-size:1.05rem;font-weight:600;letter-spacing:.04em;
    border:2px solid var(--gold);
  }
  .brand-text{line-height:1.2;min-width:0}
  .brand-text strong{
    font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.02rem;display:block;
    white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
  }
  .brand-text span{font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft);font-weight:700}
  nav.main-nav{display:flex;gap:28px;align-items:center}
  nav.main-nav a{font-weight:700;font-size:.92rem;color:var(--ink);position:relative;padding:6px 0}
  nav.main-nav a::after{content:"";position:absolute;left:0;bottom:0;width:0;height:2px;background:var(--gold);transition:width .2s ease}
  nav.main-nav a:hover::after{width:100%}
  .header-cta{min-height:44px;padding:10px 22px;font-size:.9rem}

  /* ---------- Banner hero (sem foto de profissional) ---------- */
  .banner-hero{
    position:relative;overflow:hidden;background:var(--accent-dark);
    min-height:580px;display:flex;align-items:flex-end;
    padding:150px 0 64px;
  }
  .banner-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
  .banner-overlay{
    position:absolute;inset:0;
    background:linear-gradient(180deg,rgba(20,51,39,.55) 0%,rgba(20,51,39,.30) 45%,rgba(20,51,39,.82) 100%);
  }
  .banner-content{position:relative;z-index:2;color:#fff;max-width:760px}
  .banner-eyebrow{
    display:inline-flex;align-items:center;gap:8px;
    font-size:.72rem;font-weight:800;letter-spacing:.18em;text-transform:uppercase;
    color:var(--gold-soft);
  }
  .banner-eyebrow::before{content:"";width:26px;height:1px;background:var(--gold);display:inline-block}
  .banner-content h1{
    font-family:'Fraunces',Georgia,serif;font-weight:500;
    font-size:clamp(2.3rem,5.4vw,3.7rem);line-height:1.08;letter-spacing:-.01em;
    margin:22px 0 18px;color:#fff;
  }
  .banner-content h1 em{font-style:italic;color:var(--gold-soft)}
  .banner-subtitle{font-size:1.08rem;color:rgba(255,255,255,.90);max-width:560px;margin-bottom:32px}
  .banner-ctas{display:flex;gap:14px;flex-wrap:wrap}
  .banner-note{margin-top:18px;font-size:.86rem;color:rgba(255,255,255,.80);font-weight:600}

  /* ---------- Differentials strip ---------- */
  .diffs{padding:32px 0 0;margin:0;position:relative;z-index:6}
  .diffs-card{
    background:#fff;border-radius:var(--radius);box-shadow:var(--shadow);
    border:1px solid var(--line);
    display:grid;grid-template-columns:repeat(3,1fr);
    padding:10px 6px;
  }
  .diff-item{
    display:flex;align-items:center;gap:14px;padding:18px 22px;
  }
  .diff-item + .diff-item{border-left:1px solid var(--line)}
  .diff-icon{
    width:52px;height:52px;flex:0 0 52px;border-radius:50%;
    background:var(--gold-soft);color:var(--accent);
    display:flex;align-items:center;justify-content:center;line-height:0;
  }
  .diff-icon svg,.card-icon svg,.info-icon svg{width:26px;height:26px;flex:0 0 auto;display:block;margin:auto}
  .diff-icon svg{width:30px;height:30px}
  .info-icon svg{width:22px;height:22px}
  .about-list .check svg{width:13px;height:13px}
  .diff-item strong{display:block;font-size:.96rem;line-height:1.3}
  .diff-item div span{font-size:.84rem;color:var(--ink-soft);line-height:1.4;display:block}

  /* ---------- Services ---------- */
  .services{background:var(--cream);padding-top:64px}
  .cards{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
  .card{
    background:var(--card);border-radius:var(--radius);padding:32px 30px;
    box-shadow:var(--shadow-sm);border:1px solid #F0E9D8;
    transition:transform .2s ease,box-shadow .2s ease;
  }
  .card:hover{transform:translateY(-4px);box-shadow:var(--shadow)}
  .card-icon{
    width:56px;height:56px;border-radius:18px;background:var(--accent-soft);color:var(--accent);
    display:flex;align-items:center;justify-content:center;font-size:1.45rem;margin-bottom:18px;
  }
  .card h3{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.28rem;line-height:1.25;margin-bottom:8px}
  .card p{color:var(--ink-soft);font-size:.96rem}
  .card .card-link{display:inline-flex;gap:6px;margin-top:16px;font-weight:800;font-size:.9rem;color:var(--accent)}
  .card .card-link:hover{color:var(--gold)}

  /* ---------- How it works ---------- */
  .how{background:var(--cream-2)}
  .steps{
    display:grid;grid-template-columns:repeat(4,1fr);gap:22px;position:relative;
  }
  .steps::before{
    content:"";position:absolute;top:30px;left:12%;right:12%;
    border-top:2px dotted var(--gold);opacity:.7;
  }
  .step{text-align:center;padding:0 8px;position:relative}
  .step-num{
    width:60px;height:60px;margin:0 auto 18px;border-radius:50%;
    background:var(--accent);color:#fff;
    font-family:'Fraunces',Georgia,serif;font-size:1.4rem;font-weight:600;
    display:flex;align-items:center;justify-content:center;
    border:3px solid var(--cream-2);box-shadow:0 0 0 2px var(--gold);
    position:relative;z-index:1;
  }
  .step h3{font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.12rem;margin-bottom:6px}
  .step p{font-size:.9rem;color:var(--ink-soft)}

  /* ---------- About (somente texto, sem foto) ---------- */
  .about-text--solo{max-width:740px}
  .about-text h2{
    font-family:'Fraunces',Georgia,serif;font-weight:500;
    font-size:clamp(1.9rem,4vw,2.5rem);line-height:1.15;margin:14px 0 16px;
  }
  .about-text h2 em{font-style:italic;color:var(--accent)}
  .about-text p{color:var(--ink-soft);margin-bottom:16px}
  .about-list{list-style:none;margin:22px 0 30px;display:grid;gap:12px}
  .about-list li{display:flex;gap:12px;align-items:flex-start;font-weight:600;font-size:.97rem}
  .about-list .check{
    width:24px;height:24px;flex:0 0 24px;border-radius:50%;background:var(--gold-soft);color:var(--accent);
    display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:800;margin-top:2px;
  }

  /* ---------- Faixa de imagens ---------- */
  .faixa{background:var(--cream)}
  .faixa-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}
  .faixa-item{margin:0}
  .faixa-item img{
    width:100%;aspect-ratio:4/3;object-fit:cover;
    border-radius:var(--radius);box-shadow:var(--shadow-sm);
  }

  /* ---------- Contact ---------- */
  .contact{background:var(--cream-2)}
  .contact-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:24px;align-items:stretch}
  .form-card,.info-card{
    background:#fff;border-radius:var(--radius);box-shadow:var(--shadow-sm);
    border:1px solid #F0E9D8;padding:36px 34px;
  }
  .form-card h3,.info-card h3{
    font-family:'Fraunces',Georgia,serif;font-weight:600;font-size:1.45rem;margin-bottom:6px;
  }
  .form-card > p,.info-card > p{color:var(--ink-soft);font-size:.95rem;margin-bottom:24px}
  .field{margin-bottom:16px}
  .field label{display:block;font-weight:800;font-size:.86rem;margin-bottom:7px}
  .field input,.field textarea{
    width:100%;border:1.5px solid var(--line);border-radius:14px;
    padding:14px 16px;font-family:inherit;font-size:1rem;background:var(--cream);
    color:var(--ink);outline:none;transition:border-color .15s ease,background .15s ease;
  }
  .field input:focus,.field textarea:focus{border-color:var(--accent);background:#fff}
  .field textarea{resize:vertical;min-height:104px}
  .form-card .btn{width:100%}
  .form-note{font-size:.8rem;color:var(--ink-soft);text-align:center;margin-top:12px}
  .info-item{display:flex;gap:14px;padding:15px 0;border-bottom:1px solid #F1EBDB;align-items:flex-start}
  .info-item:last-of-type{border-bottom:none}
  .info-icon{
    width:44px;height:44px;flex:0 0 44px;border-radius:50%;background:var(--accent-soft);color:var(--accent);
    display:flex;align-items:center;justify-content:center;font-size:1.1rem;
  }
  .info-item strong{display:block;font-size:.82rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-soft)}
  .info-item span{font-weight:700;font-size:1rem}
  .info-item a:hover{color:var(--accent)}

  /* ---------- Footer ---------- */
  footer{background:var(--accent-dark);color:#DCE7DF;padding:64px 0 110px}
  .footer-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:40px}
  footer .brand-text strong{color:#fff}
  footer .brand-text span{color:#A9BFB2}
  footer h4{font-family:'Fraunces',Georgia,serif;font-weight:600;color:#fff;font-size:1.05rem;margin-bottom:14px}
  footer p,footer a{font-size:.92rem;color:#C4D4C9}
  footer nav{display:grid;gap:9px}
  footer nav a:hover{color:var(--gold)}
  .footer-bottom{
    margin-top:44px;padding-top:22px;border-top:1px solid rgba(255,255,255,.14);
    display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;font-size:.82rem;color:#9DB4A5;
  }

  /* ---------- Floating WhatsApp ---------- */
  .wa-float{
    position:fixed;right:20px;bottom:20px;z-index:70;
    width:60px;height:60px;border-radius:50%;
    background:var(--wa);color:#fff;
    display:flex;align-items:center;justify-content:center;
    box-shadow:0 14px 30px rgba(34,163,90,.38);
    transition:transform .18s ease,background .18s ease;
  }
  .wa-float:hover{background:var(--wa-dark);transform:translateY(-3px)}
  .wa-float svg{width:30px;height:30px;fill:#fff}
  .wa-float:focus-visible,.btn:focus-visible,a:focus-visible{outline:3px solid var(--gold);outline-offset:3px}

  /* ---------- Responsive ---------- */
  @media (max-width:1024px){
    .steps{grid-template-columns:repeat(2,1fr);gap:34px 22px}
    .steps::before{display:none}
    .footer-grid{grid-template-columns:1fr 1fr}
  }
  @media (max-width:860px){
    section{padding:64px 0}
    .services{padding-top:48px}
    .banner-hero{padding-top:120px;min-height:480px}
    nav.main-nav{display:none}
    .contact-grid{grid-template-columns:1fr}
    .cards{grid-template-columns:1fr}
    .faixa-grid{grid-template-columns:1fr}
    .diffs-card{grid-template-columns:1fr;padding:6px 4px}
    .diff-item + .diff-item{border-left:none;border-top:1px solid var(--line)}
  }
  @media (max-width:520px){
    .container{padding:0 18px}
    .header-in{padding:12px 16px}
    .brand-text strong{font-size:.92rem;max-width:150px}
    .header-cta{padding:10px 16px;font-size:.84rem;min-height:42px}
    .banner-ctas{flex-direction:column}
    .banner-ctas .btn{width:100%}
    .steps{grid-template-columns:1fr}
    .footer-grid{grid-template-columns:1fr;gap:30px}
    .form-card,.info-card{padding:28px 22px}
    .card{padding:26px 22px}
    .wa-float{width:56px;height:56px;right:16px;bottom:16px}
    footer{padding-bottom:96px}
  }
</style>
</head>
<body>

<!-- ================= HEADER ================= -->
<header>
  <div class="header-in">
    <a class="brand" href="#inicio" aria-label="Voltar ao início">
      <span class="monogram" data-monograma aria-hidden="true">F</span>
      <span class="brand-text">
        <strong data-nome>Fisioterapeuta</strong>
        <span data-marca-sub>Fisioterapeuta</span>
      </span>
    </a>
    <nav class="main-nav" aria-label="Navegação principal">
      <a href="#servicos" data-nav="servicos">Serviços</a>
      <a href="#como-funciona">Como funciona</a>
      <a href="#sobre">Sobre</a>
      <a href="#contato">Contato</a>
    </nav>
    <a class="btn btn-wa header-cta" data-wa href="#" target="_blank" rel="noopener">WhatsApp</a>
  </div>
</header>

<main id="inicio">

  <!-- ================= BANNER HERO (imagem de ambiente, sem retrato) ================= -->
  <section class="banner-hero" aria-label="Apresentação">
    <img class="banner-img" data-banner alt="Atendimento de fisioterapia">
    <div class="banner-overlay" aria-hidden="true"></div>
    <div class="container banner-content">
      <span class="banner-eyebrow" data-pill>Fisioterapia</span>
      <h1>Movimento sem dor, com o cuidado que <em>você merece</em></h1>
      <p class="banner-subtitle" data-frase>Avaliação individual, plano de tratamento feito para a sua rotina e acompanhamento de perto em cada etapa da sua recuperação.</p>
      <div class="banner-ctas">
        <a class="btn btn-wa" data-wa href="#" target="_blank" rel="noopener">Agendar uma avaliação</a>
        <a class="btn btn-light" href="#sobre">Conheça meu trabalho</a>
      </div>
      <p class="banner-note">Atendimento com hora marcada · Resposta pelo WhatsApp em horário comercial</p>
    </div>
  </section>

  <!-- Differentials strip -->
  <div class="diffs" aria-label="Diferenciais">
    <div class="container">
        <div class="diffs-card">
          <div class="diff-item">
            <span class="diff-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4a3 3 0 0 1 6 0"/><path d="m9 13 2 2 4-4"/></svg></span>
            <div><strong>Avaliação individual</strong><span>Seu caso ouvido com calma, sem pressa</span></div>
          </div>
          <div class="diff-item">
            <span class="diff-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg></span>
            <div><strong>Plano personalizado</strong><span>Tratamento montado para o seu objetivo</span></div>
          </div>
          <div class="diff-item">
            <span class="diff-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="m9.5 15.5 2 2 3.5-3.5"/></svg></span>
            <div><strong>Agendamento fácil</strong><span>Marque sua avaliação direto pelo WhatsApp</span></div>
          </div>
        </div>
    </div>
  </div>

  <!-- ================= SERVICES ================= -->
  <section class="services" id="servicos">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Serviços</span>
        <h2>Como posso te <em>ajudar</em></h2>
        <p>Atendimentos pensados para aliviar a dor, recuperar o movimento e devolver qualidade de vida ao seu dia a dia.</p>
      </div>
      <div class="cards" data-areas></div>
    </div>
  </section>

  <!-- ================= HOW IT WORKS ================= -->
  <section class="how" id="como-funciona">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Como funciona</span>
        <h2>Simples do primeiro contato <em>à sua evolução</em></h2>
        <p>Você sabe exatamente o que esperar em cada etapa do atendimento.</p>
      </div>
      <div class="steps">
        <div class="step">
          <div class="step-num" aria-hidden="true">1</div>
          <h3>Contato pelo WhatsApp</h3>
          <p>Você chama no WhatsApp e conta, com suas palavras, o que está sentindo.</p>
        </div>
        <div class="step">
          <div class="step-num" aria-hidden="true">2</div>
          <h3>Avaliação completa</h3>
          <p>Na primeira sessão, avalio seu caso, seu histórico e seus objetivos.</p>
        </div>
        <div class="step">
          <div class="step-num" aria-hidden="true">3</div>
          <h3>Plano de tratamento</h3>
          <p>Você recebe um plano claro, com frequência, técnicas e metas combinadas.</p>
        </div>
        <div class="step">
          <div class="step-num" aria-hidden="true">4</div>
          <h3>Acompanhamento</h3>
          <p>Sua evolução é acompanhada sessão a sessão, com ajustes quando precisar.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= ABOUT (somente texto, sem foto) ================= -->
  <section id="sobre">
    <div class="container">
      <div class="about-text about-text--solo">
        <span class="eyebrow">Sobre</span>
        <h2>Prazer, eu sou <em data-nome>Fisioterapeuta</em></h2>
        <div data-sobre>
          <p>Atendimento individual, com avaliação cuidadosa e um plano montado para a sua rotina.</p>
        </div>
        <ul class="about-list">
          <li><span class="check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></span>Atendimento individual, um paciente por vez</li>
          <li><span class="check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></span>Explicação clara do tratamento, sem termos difíceis</li>
          <li><span class="check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></span>Horários combinados direto pelo WhatsApp</li>
        </ul>
        <a class="btn btn-wa" data-wa href="#" target="_blank" rel="noopener">Falar comigo no WhatsApp</a>
      </div>
    </div>
  </section>

  <!-- ================= FAIXA DE IMAGENS ================= -->
  <section class="faixa" id="faixa" aria-label="Atendimento">
    <div class="container">
      <div class="faixa-grid">
        <figure class="faixa-item">
          <img data-faixa-img="1" alt="Atendimento de fisioterapia">
        </figure>
        <figure class="faixa-item">
          <img data-faixa-img="2" alt="Sessão de fisioterapia">
        </figure>
      </div>
    </div>
  </section>

  <!-- ================= CONTACT ================= -->
  <section class="contact" id="contato">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Contato</span>
        <h2>Conte o que você <em>está sentindo</em></h2>
        <p>Preencha ao lado e a mensagem chega pronta no meu WhatsApp. Se preferir, use um dos canais diretos.</p>
      </div>
      <div class="contact-grid">
        <div class="form-card" id="formCard">
          <h3>Peça sua avaliação</h3>
          <p>Leva menos de um minuto. Ao enviar, você é direcionado ao WhatsApp com a mensagem já preenchida.</p>
          <form id="waForm" novalidate>
            <div class="field">
              <label for="f-nome">Seu nome</label>
              <input id="f-nome" name="nome" type="text" autocomplete="name" placeholder="Como posso te chamar?" required>
            </div>
            <div class="field">
              <label for="f-fone">Seu WhatsApp</label>
              <input id="f-fone" name="telefone" type="tel" autocomplete="tel" inputmode="tel" placeholder="(00) 00000-0000">
            </div>
            <div class="field">
              <label for="f-msg">O que você está sentindo?</label>
              <textarea id="f-msg" name="mensagem" placeholder="Ex.: sinto dor no joelho há algumas semanas e quero agendar uma avaliação." required></textarea>
            </div>
            <button class="btn btn-wa" type="submit">Enviar pelo WhatsApp</button>
            <p class="form-note">Sem compromisso. Seus dados vão só para a conversa no WhatsApp.</p>
          </form>
        </div>

        <div class="info-card">
          <h3>Fale comigo</h3>
          <p>Canais diretos para agendar, tirar dúvidas ou conhecer o espaço.</p>
          <div class="info-item">
            <span class="info-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13 1 .36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.85.57 2.8.7A2 2 0 0 1 22 16.9z"/></svg></span>
            <div><strong>WhatsApp</strong><span><a data-wa data-wa-texto href="#" target="_blank" rel="noopener">Chamar no WhatsApp</a></span></div>
          </div>
          <div class="info-item">
            <span class="info-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
            <div><strong>Onde atendo</strong><span data-endereco></span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>

<!-- ================= FOOTER ================= -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="brand" href="#inicio" aria-label="Voltar ao início">
          <span class="monogram" data-monograma aria-hidden="true">F</span>
          <span class="brand-text">
            <strong data-nome>Fisioterapeuta</strong>
            <span data-marca-sub>Fisioterapeuta</span>
          </span>
        </a>
        <p style="margin-top:18px;max-width:340px" data-rodape-texto>Atendimento de fisioterapia com avaliação individual e plano personalizado.</p>
      </div>
      <div>
        <h4>Navegação</h4>
        <nav aria-label="Links do rodapé">
          <a href="#servicos" data-nav="servicos">Serviços</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
      <div>
        <h4>Contato</h4>
        <p><span data-rodape-wa></span><br>
        <span data-rodape-end></span></p>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-rodape-copy>Todos os direitos reservados.</span>
      <span data-crefito></span>
      <span>Conteúdo informativo. Em caso de dor intensa ou emergência, procure atendimento imediato.</span>
    </div>
  </div>
</footer>

<!-- Floating WhatsApp -->
<a class="wa-float" data-wa href="#" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.4 7L4.6 29l7.3-1.8c1.3.4 2.7.6 4.1.6 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm0 21.7c-1.3 0-2.6-.2-3.8-.7l-.3-.1-4.3 1.1 1.1-4.1-.2-.3a9.7 9.7 0 0 1-2-5.7C6.5 9.6 10.8 5.3 16 5.3S25.5 9.6 25.5 14.9 21.2 24.7 16 24.7zm5.3-7.2c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1a11.6 11.6 0 0 1-5.7-5c-.4-.7.4-.6 1.1-2.1.1-.3 0-.5 0-.6l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>
</a>

<script>window.DADOS = {{DADOS_JSON}};</script>
<script>
(function(){
  var D = window.DADOS || {};
  function v(s){ return (s || "").toString().trim(); }
  function soDigitos(s){ return (s || "").split("").filter(function(c){ return c >= "0" && c <= "9"; }).join(""); }
  function formatar(d){
    if (d.length === 13) return "(" + d.slice(2, 4) + ") " + d.slice(4, 9) + "-" + d.slice(9);
    if (d.length === 12) return "(" + d.slice(2, 4) + ") " + d.slice(4, 8) + "-" + d.slice(8);
    if (d.length === 11) return "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
    return d;
  }
  function misturar(hex, alvo, pct){
    var n = parseInt(hex.slice(1), 16);
    var r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    var t = parseInt(alvo.slice(1), 16);
    var tr = (t >> 16) & 255, tg = (t >> 8) & 255, tb = t & 255;
    var m = function(a, c){ return Math.round(a + (c - a) * pct); };
    return "rgb(" + m(r, tr) + "," + m(g, tg) + "," + m(b, tb) + ")";
  }
  function esconder(el){ if (el) el.style.display = "none"; }

  var nome = v(D.nome), esp = v(D.especialidade), cid = v(D.cidade);

  if (nome) {
    document.title = nome + (cid ? " | Fisioterapeuta em " + cid : " | Fisioterapeuta");
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", nome + (esp ? " - " + esp : "") + (cid ? " em " + cid + ". " : ". ") + "Atendimento com avaliação individual e plano personalizado. Fale pelo WhatsApp.");
  }
  document.querySelectorAll("[data-nome]").forEach(function(el){ el.textContent = nome || "Fisioterapeuta"; });
  var ini = nome.split(" ").filter(Boolean).slice(0, 2).map(function(p){ return p.charAt(0).toUpperCase(); }).join("") || "F";
  document.querySelectorAll("[data-monograma]").forEach(function(el){ el.textContent = ini; });
  document.querySelectorAll("[data-marca-sub]").forEach(function(el){
    el.textContent = "Fisioterapeuta" + (cid ? " · " + cid : "");
  });
  var pill = document.querySelector("[data-pill]");
  if (pill) pill.textContent = [esp, cid].filter(Boolean).join(" · ") || "Fisioterapia";
  var fraseEl = document.querySelector("[data-frase]");
  if (fraseEl && v(D.fraseApresentacao)) fraseEl.textContent = v(D.fraseApresentacao);

  var bannerImg = document.querySelector("[data-banner]");
  var bannerSrc = v(D.fotoBanner) || v(D.foto);
  if (bannerImg) {
    if (bannerSrc) bannerImg.src = bannerSrc;
    else bannerImg.style.display = "none";
  }
  var faixa1 = document.querySelector('[data-faixa-img="1"]');
  var faixa2 = document.querySelector('[data-faixa-img="2"]');
  var src1 = v(D.foto);
  var src2 = v(D.foto2) || src1;
  if (faixa1 && src1) faixa1.src = src1;
  if (faixa2 && src2) faixa2.src = src2;
  if (!src1) esconder(document.getElementById("faixa"));

  var ICONES = [
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.7 9.7 0 0 0-6.7 2.7L3 8"/><path d="M3 3v5h5"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20Z"/><path d="M9.5 21v-7h5v7"/></svg>'
  ];
  var cardsBox = document.querySelector("[data-areas]");
  var linhas = v(D.areas).split(String.fromCharCode(10)).map(function(linha){
    var partes = linha.split("|");
    return { t: v(partes[0]), d: v(partes.slice(1).join("|")) };
  }).filter(function(l){ return !!l.t; });
  if (cardsBox) {
    if (!linhas.length) {
      esconder(document.getElementById("servicos"));
      document.querySelectorAll('[data-nav="servicos"]').forEach(function(a){ esconder(a); });
    } else {
      linhas.forEach(function(l, i){
        var art = document.createElement("article");
        art.className = "card";
        var ic = document.createElement("div");
        ic.className = "card-icon";
        ic.setAttribute("aria-hidden", "true");
        ic.innerHTML = ICONES[i % ICONES.length];
        var h = document.createElement("h3");
        h.textContent = l.t;
        var a = document.createElement("a");
        a.className = "card-link";
        a.href = "#contato";
        a.textContent = "Quero saber mais →";
        art.appendChild(ic);
        art.appendChild(h);
        if (l.d) {
          var p = document.createElement("p");
          p.textContent = l.d;
          art.appendChild(p);
        }
        art.appendChild(a);
        cardsBox.appendChild(art);
      });
    }
  }

  var sobreBox = document.querySelector("[data-sobre]");
  var paras = [D.sobre1, D.sobre2, D.sobre3].map(v).filter(Boolean);
  if (sobreBox) {
    if (!paras.length) {
      esconder(sobreBox);
    } else {
      sobreBox.innerHTML = "";
      paras.forEach(function(t){
        var p = document.createElement("p");
        p.textContent = t;
        sobreBox.appendChild(p);
      });
    }
  }

  var dig = soDigitos(D.whatsapp);
  var link = v(D.linkDoBotao);
  var temContato = !!(dig || link);
  var msg = "Olá" + (nome ? ", " + nome : "") + "! Vim pelo seu site e quero agendar uma avaliação.";
  var hrefWa = link ? link : (dig ? "https://wa.me/" + dig + "?text=" + encodeURIComponent(msg) : "#");
  document.querySelectorAll("[data-wa]").forEach(function(a){
    if (!temContato) { esconder(a); return; }
    a.setAttribute("href", hrefWa);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });
  var formCard = document.getElementById("formCard");
  if (!dig && formCard) esconder(formCard);
  if (!temContato) {
    var grid = document.querySelector(".contact-grid");
    if (grid) grid.style.gridTemplateColumns = "1fr";
  }
  var waTexto = document.querySelector("[data-wa-texto]");
  if (waTexto) {
    if (!temContato) {
      esconder(waTexto.closest(".info-item"));
    } else {
      waTexto.textContent = dig ? formatar(dig) : "Chamar no WhatsApp";
      waTexto.setAttribute("href", hrefWa);
    }
  }
  var endTxt = v(D.endereco) || cid;
  var endEl = document.querySelector("[data-endereco]");
  if (endEl) {
    if (!endTxt) esconder(endEl.closest(".info-item"));
    else endEl.textContent = endTxt;
  }
  var rodapeWa = document.querySelector("[data-rodape-wa]");
  if (rodapeWa) rodapeWa.textContent = dig ? "WhatsApp: " + formatar(dig) : (temContato ? "WhatsApp: chamar pelo botão" : "");
  var rodapeEnd = document.querySelector("[data-rodape-end]");
  if (rodapeEnd) rodapeEnd.textContent = endTxt;
  var copyEl = document.querySelector("[data-rodape-copy]");
  if (copyEl) copyEl.textContent = "© " + new Date().getFullYear() + (nome ? " " + nome : "") + ". Todos os direitos reservados.";
  var crefEl = document.querySelector("[data-crefito]");
  if (crefEl) {
    if (v(D.crefito)) crefEl.textContent = "CREFITO " + v(D.crefito);
    else esconder(crefEl);
  }
  var rodapeTxt = document.querySelector("[data-rodape-texto]");
  if (rodapeTxt) rodapeTxt.textContent = "Atendimento de fisioterapia com avaliação individual e plano personalizado" + (cid ? " em " + cid + "." : ".");

  var cor = /^#[0-9a-fA-F]{6}$/.test(v(D.corDoBotao)) ? v(D.corDoBotao) : "#1E4D3B";
  var root = document.documentElement;
  root.style.setProperty("--accent", cor);
  root.style.setProperty("--accent-dark", misturar(cor, "#000000", 0.35));
  root.style.setProperty("--accent-soft", misturar(cor, "#ffffff", 0.88));

  var form = document.getElementById("waForm");
  if (form && dig) {
    form.addEventListener("submit", function(ev){
      ev.preventDefault();
      var nomeV = document.getElementById("f-nome").value.trim();
      var fone = document.getElementById("f-fone").value.trim();
      var mensagem = document.getElementById("f-msg").value.trim();
      if (!nomeV || !mensagem) {
        alert("Preencha seu nome e o que você está sentindo para eu te atender melhor.");
        return;
      }
      var partesTexto = ["Olá! Meu nome é " + nomeV + ".", mensagem];
      if (fone) partesTexto.push("Meu WhatsApp é " + fone + ".");
      partesTexto.push("Vim pelo seu site e quero saber mais sobre a avaliação.");
      var texto = partesTexto.join(String.fromCharCode(10));
      window.open("https://wa.me/" + dig + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
    });
  }
})();
</script>
</body>
</html>
`;

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
  const campos = ["nome","especialidade","publico","cidade","fraseApresentacao","whatsapp","linkDoBotao","foto","foto2","fotoBanner","corDoBotao","crefito","endereco","tituloFaixa1","tituloFaixa2","sobre1","sobre2","sobre3","areas","formacao","modelo","formatoFoto","ladoHero","fundo"];
  const limpo = {};
  for (const c of campos) { if (typeof dados[c] === "string" && dados[c].trim()) limpo[c] = dados[c]; }
  const json = JSON.stringify(limpo).replace(/</g, "\\u003c");
  const pagina = (limpo.modelo === "premium-sem-foto" ? MODELO_SEMFOTO : (limpo.modelo === "premium" ? MODELO_PREMIUM : MODELO)).replace("{{DADOS_JSON}}", json);
  return new Response(pagina, {
    headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex" }
  });
}
