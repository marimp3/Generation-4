// Escreva um programa para criar uma Collection Set do tipo number. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores
//  inteiros não repetidos e adicione-os individualmente na Collection Set. 
// Em seguida, faça o que se pede:
// Mostre na tela todos os elementos da Collection Set. 

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