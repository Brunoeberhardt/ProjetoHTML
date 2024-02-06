const btn = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

btn.addEventListener("click", () => {

    elementoPlataformas.classList.toggle("ativo");
/*
    const botaoAberto = elementoPlataformas.classList.contains("ativo")
    if(botaoAberto){
        elementoPlataformas.classList.remove("ativo");
    }else{
        elementoPlataformas.classList.add("ativo")
    }
*/
});