var possuiGraduacoes = false;
var possuiDoutorado = true;

if (possuiGraduacoes) {
	console.log("Possui graduação");
} else if (possuiDoutorado) {
	console.log("Possui doutorado");
} else {
	console.log("Não possui graduação");
	console.log("Não possui doutorado");
}

var nome = "Jonathan";

if (nome) {
	console.log("Nome existe");
} else {
	console.log("Nome não existe");
}

if (!possuiGraduacoes) {
	// Transformou em true
	console.log("Não possui graduação");
}

var gato = "Gato";
var cachorro = "Cão";

var corFavorita = "verde";

switch (corFavorita) {
	case "azul":
		console.log("Olhe para o céu");
		break;
	case "verde":
		console.log("Olhe para a floresta");
		break;
	case "amarelo":
		console.log("Olhe para o sol");
		break;
	default:
		console.log("Feche os olhos.");
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 28;
var idadePrimo = 32;
if (minhaIdade > idadePrimo) {
	console.log("É maior");
} else if (minhaIdade === idadePrimo) {
	console.log("É igual");
} else {
	console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao); // 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Jonathan";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta); // true

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
	console.log("Brasil tem mais habitantes");
} else {
	console.log("Brasil tem menos habitantes");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
	console.log("Verdadeiro");
} else {
	console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
	console.log("Gato" && "Cão");
} else {
	console.log("Falso");
}
