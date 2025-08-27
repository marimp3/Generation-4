
Object.defineProperty(exports, "__esModule", { value: true });
let leia = require("readline-sync");
let listaNumeros = new Set();
let numero;
for (let i = 0; i < 10; i++) {
    numero = leia.questionInt("Digite um numero: ");
    listaNumeros.add(numero);
}
console.log("\nNumeros cadastradas:");
console.log("\nNumeros cadastrados:");
for (const numero of listaNumeros) {
    console.log(numero);
}
