Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var listaCores = [];
var cores;
for (var i = 0; i < 5; i++) {
    cores = readline_sync_1.default.question("Digite uma cor: ");
    listaCores.push(cores);
}
console.log("\nCores cadastradas:");
for (var i = 0; i < listaCores.length; i++) {
    console.log(listaCores[i]);
}

listaCores.sort();
console.log("\nCores cadastradas em ordem crescente:");
for (var i = 0; i < listaCores.length; i++) {
    console.log(listaCores[i]);
}
