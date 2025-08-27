Object.defineProperty(exports, "__esModule", { value: true });
let readline_sync_1 = require("readline-sync");
let listaCores = [];
let cores;
for (let i = 0; i < 5; i++) {
    cores = readline_sync_1.default.question("Digite uma cor: ");
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
