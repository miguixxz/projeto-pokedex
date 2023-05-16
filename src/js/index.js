const botaoAlterarTema = document.getElementById("botão-alterar-tema");
const body = document.querySelector("body")
console.log(body);
const imgBotaoTrocaDeTema = document.querySelector(".img-botao")


botaoAlterarTema.addEventListener("click", () => {


    const bataoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (bataoEscuroEstaAtivo) {
        
        imgBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        
        imgBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")

    }




});

