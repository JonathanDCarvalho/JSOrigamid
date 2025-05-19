var nome = "Jonathan";
var altura = 1.77;
console.log(altura.toFixed());
console.log(altura.toString());

// Elementos do DOM.

var botao = document.querySelector(".btn");
botao.addEventListener("click", () => {
	console.log("Cliquei...");
});

// Objetos Revolucionaram a Programação
// Web API's são métodos e propriedades que permitem a interação JavaScript e Browser

// Exercícios

// nomeie 3 propriedades ou métodos de strings
var sobrenome = "Carvalho";
console.log(sobrenome.length);
console.log(sobrenome.toLowerCase());
console.log(sobrenome.toUpperCase());
console.log(sobrenome.slice(0, 2));
console.log(sobrenome.split("v").join("r"));

var nomeCompleto = "Jonathan Carvalho";
console.log(nomeCompleto.split(" ").join("-"));

// nomeie 5 propriedades ou métodos de elementos do DOM
var botao = document.querySelector(".btn");
console.log(botao);
botao.classList.add("vermelho");
console.log(botao);
botao.addEventListener("click", () => {
	console.log("Cliquei porra....");
});
console.log(botao.innerText);

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
