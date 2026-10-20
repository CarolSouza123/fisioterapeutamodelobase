# Site de amostras para fisioterapeutas: um site só, infinitos links personalizados

A página base fica oculta dentro do código. Na raiz do site fica o **seu painel**. Você cadastra o profissional no painel e o site cria na hora o endereço dele, por exemplo **/dra-ana-paula-ribeiro**. Nenhum repositório novo por amostra.

## Como ativar no Cloudflare, uma única vez

1. Conecte este repositório no Cloudflare Pages, se ainda não conectou: preset nenhum, sem comando de build, pasta de saída na raiz, branch de produção **main**.
2. Crie um namespace KV: no painel do Cloudflare, área de armazenamento KV, criar namespace com o nome que você quiser, por exemplo **fisioterapeutas**.
3. Vincule o KV ao projeto: abra o projeto no Pages, configurações, funções (Functions), vinculações de KV, adicionar com o nome de variável exatamente **PROFISSIONAIS_KV** e escolher o namespace que você criou.
4. Crie sua chave: no mesmo projeto, configurações, variáveis de ambiente, produção, adicionar a variável **ADMIN_KEY** com uma chave só sua e marcar como secreta.
5. Faça uma nova implantação da versão mais recente (implantações, tentar de novo na mais recente, ou aguarde o próximo envio ao GitHub).

Sem os passos 3 e 4 o painel abre, mas avisa que falta ativar. Com eles, tudo funciona.

## Como usar o painel no dia a dia

1. Abra o endereço do site. Digite sua chave e entre.
2. Preencha nome, especialidade, cidade, quem ele atende, frase, WhatsApp dele, cor do botão, link da foto, CREFITO e endereço. Nome e WhatsApp são obrigatórios; o resto vazio usa o padrão do modelo.
3. Toque em **Salvar e gerar o link**. O endereço do profissional aparece na tela, com botões para copiar, abrir a amostra e enviar para ele no WhatsApp dele, com a mensagem já escrita.
4. Para corrigir algo, salve de novo com o mesmo nome: o mesmo endereço é atualizado, sem duplicar.
5. Para apagar uma amostra, use o botão **Excluir** na lista. O link para de funcionar na hora.

## Como a página dele é montada

O endereço /nome-do-profissional lê os dados salvos e monta a página modelo com nome, especialidade, cidade, foto, cor e WhatsApp dele em todos os botões. A estrutura é a do protótipo: primeira dobra, faixas de resultados e de depoimentos, três dores, como funciona a avaliação, apresentação, FAQ e rodapé com CREFITO. As páginas de amostra saem com noindex, para o Google não indexar amostras de prospecção.

## Arquivos deste repositório

1. **index.html**: o painel (raiz do site).
2. **functions/[slug].js**: monta a página personalizada de cada profissional e guarda o modelo oculto.
3. **functions/api/profissionais.js**: salva, lista e exclui os cadastros no KV, protegido pela sua chave.
4. **foto.svg**: imagem cinza padrão enquanto a foto do profissional não é informada.

## Cuidados

Nada de promessa de cura ou de resultado garantido nos textos do modelo. Nome e CREFITO visíveis na página do profissional. Fotos de pacientes e depoimentos só com autorização de quem aparece.

Ativação no Cloudflare: painel publicado em fisioterapeutaprofissional.pages.dev, com KV e chave configurados pela Caroline em 20/10/2026.
