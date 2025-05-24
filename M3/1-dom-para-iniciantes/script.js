// window.alert("Isso mesmo");

const h1Selecionado = document.querySelector("h1");
h1Selecionado.addEventListener("click", function () {
	console.log("Clicou em ", h1Selecionado);
});

// Retorne o url da página atual utilizando o objeto window
const href = window.location.href;
console.log(href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector(".ativo");
console.log(ativo);

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);
// Retorne a largura da janela
const largura = window.innerWidth;
console.log(largura);
