// Arrays e Loops

var videoGames = ["Switch", "PS4", "Xbox"];

videoGames.pop();
videoGames.push("PlayStation");

console.log(videoGames[0]); // Switch
console.log(videoGames[2]); // PlayStation

// For Loop
for (let i = 0; i <= 10; i++) {
	console.log(i);
}

// While Loop
let i = 0;
while (i <= 10) {
	console.log(i);
	i += 5;
}

// Arrays e For Loop
for (let i = 0; i < videoGames.length; i++) {
	console.log(videoGames[i]);
}

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

// for (let i = 0; i < frutas.length; i++) {
// 	console.log(frutas[i]);
// 	if (frutas[i] === "Abacaxi") {
// 		break;
// 	}
// }

// forEach
// Método Comum de fazer um for loop em array

frutas.forEach((frutas, index, array) => {
	console.log(array);
});

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anosCopa = [1959, 1962, 1970, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
anosCopa.forEach((ano, index, array) => {
	console.log(`O brasil ganhou a copa de ${ano}`);
});

for (let i = 0; i < anosCopa.length; i++) {
	console.log(`O brasil ganhou a copa de ${anosCopa[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

for (let i = 0; i < frutas.length; i++) {
	console.log(frutas[i]);
	if (frutas[i] === "Pera") {
		break;
	}
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
