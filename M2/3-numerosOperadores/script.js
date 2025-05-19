// Números e Operadores

var idade = 23;
console.log(idade);

//soma, subtração, multiplicação, divisão, expoente, modulo

let soma = 100 + 50;
let subtracao = 100 - 50;
let multiplicacao = 10 * 5;
let divisao = 200 / 5;
let modulo = 40 % 2;
let expoente = 2 ** 2;

console.log({ soma, subtracao, multiplicacao, divisao, modulo, expoente });

//isNaN, função para verificar se não é um número

var testeNaN = "Isso não é um número";
console.log(isNaN(testeNaN)); // true
console.log(isNaN(expoente)); // false

// Assim como na matemática, em JavaScript a Ordem importa
// PEMDAS (Parenteses, Expoente, Multiplicação e Divisão, Adição e Subtração)

var soma1 = 10 + 10 + 20 + (30 * 4) / 2 + 10;
console.log(soma1);

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
let number1 = "1E";
let number2 = "2E";
console.log(isNaN(number1));
console.log(isNaN(number2));
// Somar a string '200' com o número 50 e retornar 250
var soma1 = +"200" + 50;
console.log(soma1);
// Incremente o número 5 e retorne o seu valor incrementado
var number3 = 5;
console.log(++number3);
// Como dividir o peso por 2?
var numero = +"80" / 2;
console.log(numero);
var unidade = "kg";
var peso = numero + unidade; // '80kg'
console.log(peso);

// --------------------------------------------------------
