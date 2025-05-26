// Classes e Atributos

const menu = document.querySelector(".menu");
menu.classList.add("azul");
console.log(menu.classList);
menu.classList.remove("azul");
console.log(menu.classList);

if (menu.classList.contains("azul")) {
	menu.classList.add("possui-azul");
} else {
	menu.classList.add("nao-possui-azul");
}

console.log(menu.classList);

const animais = document.querySelector(".animais");
console.log(animais.attributes);

const img = document.querySelector("img");
console.log(img.getAttribute("alt"));
img.setAttribute("alt", "É uma raposa");
console.log(img.getAttribute("alt"));
const possuiAlt = img.hasAttribute("alt");
console.log(possuiAlt);
img.removeAttribute("alt");
console.log(img.getAttribute("alt"));

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((fields) => {
	fields.classList.add("ativo");
});
console.log(itensMenu);
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((fields) => {
	fields.classList.remove("ativo");
});
console.log(itensMenu);
itensMenu[0].classList.add("ativo");
console.log(itensMenu);
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((fields) => {
	const possuiAtributo = fields.hasAttribute("alt");
	console.log(possuiAtributo);
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute("href", "https://www.google.com");
console.log(link);
