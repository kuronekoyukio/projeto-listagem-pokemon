// theme change
export function alterTheme() {
  const BotaoAlterarTema = document.getElementById("botao-alterar-tema");

  const body = document.querySelector("body");

  const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

  BotaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
})};