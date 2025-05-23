// Jeito antigo
// ID
const animais = document.getElementById("animais");
console.log(animais);

// Classe e Tag
// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);
console.log(gridSection[0]);

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");
console.log(ul);
console.log(ul[1]);

// Seletor Geral Único
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
const animais1 = document.querySelector(".animais");
const contato = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector("li");

// Seletor Geral Lista
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);

// HTMLCollection vs NodeList
// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

console.log(gridSectionHTML);
console.log(gridSectionNode);

// adiciona uma classe
primeiroUl.classList.add("grid-section");

gridSectionNode.forEach((fields, index, obj) => {
	console.log(fields);
	console.log(index);
});

const arrayGrid = Array.from(gridSectionHTML); // transformar em array
arrayGrid.pop();

// Retorne no console todas as imagens do site
const img = document.querySelectorAll("img");
console.log(img);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const img1 = document.querySelectorAll('img[src^="img/imagem"]');
console.log(img1);
// Selecione todos os links internos (onde o href começa com #)
const href = document.querySelectorAll('[href^="#"]');
console.log(href);
// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector(".animais-descricao h2");
console.log(h2);
// Selecione o último p do site
const p = document.querySelectorAll("p");
console.log(p[p.length - 1]);
