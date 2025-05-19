var pessoa = {
	nome: "Lucas",
	idade: 25,
	profissao: "Desenvolvedor",
	possuiFaculdade: true,
};

console.log(pessoa);
console.log(pessoa.nome, pessoa.idade, pessoa.profissao, pessoa.possuiFaculdade);

var quadrado = {
	lados: 4,
	area: function (lado) {
		return lado * lado;
	},
	perimetro: function (lado) {
		return this.lados * lado;
	},
};

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

Math.PI; // 3.14 (Propriedade)
Math.random(); // 0.123456789 (Método)
// Math é um objeto nativo do JavaScript que possui propriedades e métodos para realizar operações matemáticas.
// Exemplo de uso do Math
console.log(Math.PI); // 3.141592653589793
console.log(Math.random()); // Número aleatório entre 0 e 1
// Exemplo de uso do Math com propriedades e métodos

console.table(quadrado);

var menu = {
	width: 800,
	height: 50,
	background: "#84E",
	metadeHeight: function () {
		return this.height / 2;
	},
};

menu.background = "#000"; // Alterando a cor de fundo
menu.color = "#FFF"; // Adicionando uma nova propriedade
var bg = menu.background;
console.log(bg);
console.log(menu.color);

menu.esconder = function () {
	return "Escondendo o menu";
};

console.log(menu.esconder());
console.log(menu);
console.log(menu.metadeHeight());

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
	nome: "Jonathan",
	sobrenome: "Carvalho",
	idade: 23,
	profissao: "Desenvolvedor",
	nomeCompleto: function () {
		return `${this.nome} ${this.sobrenome}`;
	},
};

console.log(dadosPessoais.nomeCompleto());

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
	preco: 1000,
	portas: 4,
	marca: "Audi",
};

console.log(carro.preco);
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
	raca: "Labrador",
	cor: "preto",
	idade: 10,
	latir: function (sexo) {
		if (sexo === "homem") {
			return "Au Au";
		} else {
			return "Nada";
		}
	},
};

console.log(cachorro.latir("homem"));
console.log(cachorro.latir());