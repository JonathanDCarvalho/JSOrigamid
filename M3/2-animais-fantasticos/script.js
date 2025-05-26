// Height e Width
const listaAnimais = document.querySelector(".animais-lista");
const height = listaAnimais.scrollHeight;
console.log(height);

//offsetTop e offsetLeft
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector("h2");
const h2left = primeiroh2.offsetLeft;
console.log(h2left);

// getBoundingClientRect()
const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

// Window
console.log(window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight, window.pageYOffset, window.pageXOffset);

// matchMedia();
// Utilize um media-querie como no CSS para verificar a largura do browser.
const small = window.matchMedia("(max-width: 600px)").matches;

if (small) {
	console.log("Usuário mobile");
} else {
	console.log("Usuário Desktop");
}

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector("img");
const imgTop = img.offsetTop;
console.log(imgTop);
// Retorne a soma da largura de todas as imagens

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector(".menu");
const browser = window.matchMedia("(max-width: 720px)").matches;
if (browser) {
	menu.classList.add("menu-mobile");
	console.log(menu.classList);
} else {
	console.log(menu.classList);
}
