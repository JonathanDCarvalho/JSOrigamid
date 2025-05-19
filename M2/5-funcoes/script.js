function areaQuadrado(lado) {
	return lado * lado;
}

console.log(areaQuadrado(4)); // 16
console.log(areaQuadrado(5)); // 25
console.log(areaQuadrado(2)); // 4

function pi() {
	return 3.14;
}

var total = 5 * pi();
console.log(pi()); // 15.700000000000001

// Parâmetros e argumentos

// peso e altura são os parâmetros
function imc(peso, altura) {
	var imc = peso / (altura * altura);
	return imc;
}

console.log(imc(90, 1.77)); // 23.225431847873423
imc(60, 1.7); // 27.343749999999996
imc(64, 1.6); // 24.999999999999996

function corFavorita(cor) {
	if (cor === "azul") {
		return "Você gosta do céu";
	} else if (cor === "verde") {
		return "Você gosta de mato";
	} else {
		return "Você não gosta de nada";
	}
}
corFavorita(); // retorna 'Você não gosta de nada'

addEventListener("click", function () {
	console.log("Clicou");
});

function imc2(peso, altura) {
	var imc = peso / (altura * altura);
	console.log(imc);
}

imc2(64, 1.66); // undefined
console.log(imc2(64, 1.66)); // undefined porque não tem return

function terceiraIdade(idade) {
	console.log(typeof idade); // number
	if (typeof idade !== "number") {
		return "Informe sua idade";
	}
	if (idade >= 60) {
		return true;
	} else {
		return false;
	}
}

console.log(terceiraIdade(65)); // 65

function faltaVisitar(paisesVisitados) {
	var totalPaises = 193;
	return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}
console.log(faltaVisitar(20)); // Faltam visitar 173 países

var profissao = "Designer";

function dados() {
	var nome = "André";
	var idade = 28;
	function outrosDados() {
		var endereco = "Rio de Janeiro";
		var idade = 29;
		return `${nome}, ${idade}, ${endereco}, ${profissao}`;
	}
	return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'

// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
	return !!dado;
}
console.log(isTruthy(0)); // false
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
	return lado * 4;
}

console.log(perimetroQuadrado(5)); // 20

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
	return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Jonathan", "Carvalho")); // Jonathan Carvalho

// Crie uma função que verifica se um número é par

function isPar(numero) {
	if (numero % 2 === 0) {
		console.log("É par");
	} else {
		console.log("É ímpar");
	}
}

isPar(2);
isPar(3);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
	return typeof dado;
}

console.log(tipoDado(2)); // number
console.log(tipoDado("2")); // string

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
	console.log("Jonathan Carvalho");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
	return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
	return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
