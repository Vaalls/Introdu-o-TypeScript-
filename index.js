"use strict";
let nomeCompleto = "Gabriel Valls";
const pi = 3.14;
let idade = 20;
console.log(nomeCompleto);
let frase = 'Olá';
let peso = 62.5;
let aprovado = true;
let texto = `${frase} ${nomeCompleto}, Você tem ${idade} anos e pesa ${peso}`;
console.log(texto);
let texto2 = [];
console.log("Array texto 2");
texto2.push("Lindo");
texto2.push("Corinthians");
texto2.push("Teste");
console.log(`Itens texto 2: ${texto2.length}`);
texto2.forEach(item => {
    console.log(item);
});
let numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(`Itens lista de numeros: ${numeros.length}`);
numeros.forEach(item => {
    console.log(item);
});
let listarPessoas = [];
let pessoa = {
    nome: "Beatriz",
    idade: 20
};
listarPessoas.push(pessoa);
let pessoa1 = {
    nome: "Gabriel",
    idade: 20
};
listarPessoas.push(pessoa1);
console.log(listarPessoas);
listarPessoas.forEach(item => {
    console.log(item.nome);
});
for (let p = 0; p < listarPessoas.length; p++) {
    console.log(listarPessoas[p].nome);
}
