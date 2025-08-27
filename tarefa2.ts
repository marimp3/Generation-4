
import leia = require('readline-sync');

let listaNumeros: Set<number> = new Set<number>();
let numero: number;

for(let i=0 ; i<10; i++){
    numero = leia.questionInt("Digite um numero: ");
    listaNumeros.add(numero);
}

console.log("\nNumeros cadastradas:");

for(let numero of listaNumeros){
    console.log(numero);
}
