let nomeCompleto = "Gabriel Valls";
const pi = 3.14;
let idade = 20;

console.log(nomeCompleto);

//Tipos
let frase:String = 'Olá';
let peso:Number = 62.5;
let aprovado:Boolean = true;

//concatenação
let texto = `${frase} ${nomeCompleto}, Você tem ${idade} anos e pesa ${peso}`;
console.log(texto);

//Arrays 

let texto2: String[] = [];

console.log("Array texto 2")
texto2.push("Lindo");
texto2.push("Corinthians")
texto2.push("Teste");
console.log(`Itens texto 2: ${texto2.length}`)
texto2.forEach(item => {
    console.log(item)
})

let numeros:Number [] =[1,2,3,4,5,6,7];
console.log(`Itens lista de numeros: ${numeros.length}`)
numeros.forEach(item => {
    console.log(item)
})

//Objetos

let listarPessoas = [];

let pessoa:{nome:string, idade:number} = {
    nome: "Beatriz",
    idade: 20
}
listarPessoas.push(pessoa)

let pessoa1:{nome:String, idade:Number} = {
    nome:"Gabriel",
    idade: 20
}
listarPessoas.push(pessoa1)
console.log(listarPessoas)

//Listando nome
listarPessoas.forEach(item =>{
    console.log(item.nome)
})




