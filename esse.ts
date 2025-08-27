import leia from 'readline-sync';

let listaCores: Array<string> = [];
let cores: string;

for (let i = 0; i < 5; i++) {
    cores = leia.question("Digite uma cor: ");
    listaCores.push(cores);
}
console.log("\nCores cadastradas:");
for (let i = 0; i < listaCores.length; i++) {
    console.log(listaCores[i]);
}
listaCores.sort();

console.log("\nCores cadastradas em ordem crescente:");
for (let i = 0; i < listaCores.length; i++) {
    console.log(listaCores[i]);
}
