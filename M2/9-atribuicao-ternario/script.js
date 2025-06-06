// Operadores de Atribuição

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

// Operador Ternário
// Abreviação de condicionais com if e else

var idade = 19;
var podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";

// condição ? true : false
// Geralmente utilizado quando precisamos atribuir um valor  para uma variável, dependendo de uma condição

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll1 = 1000;
scroll1 += 500;
console.log(scroll1);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = false;
var possuiCasa = true;
var darCredito = possuiCarro && possuiCasa;
console.log(darCredito);
