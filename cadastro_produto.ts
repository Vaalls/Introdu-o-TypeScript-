// criando variavel global, lista de objetos produtos 
var produtos :{id:String, nome:String, cor:String, tamanho:String, preco:String} [] = []

//preenchendo as opções de cores no HTML
let cores = ["amarelo","azul", "vermelho"]
let corSelect = document.getElementById("cor") as HTMLSelectElement

cores.forEach(cor => {
    let option = document.createElement('option');
    option.text = cor;
    option.value = cor;
    corSelect.appendChild(option)
})

//preenchendo as opções de tamanho no HTML
let tamanhos = ["P","M","G"]
let tamanhoSelect = document.getElementById("tamanho") as HTMLSelectElement

tamanhos.forEach(tamanho => {
    let option = document.createElement('option');
    option.text = tamanho;
    option.value = tamanho;
    tamanhoSelect.appendChild(option)
})

// Fazendo função save
function save(){
    const produtoInput = document.getElementById("produto") as HTMLSelectElement;
    const corInput = document.getElementById("cor") as HTMLSelectElement;
    const tamanhoInput = document.getElementById("tamanho") as HTMLSelectElement;
    const precoInput = document.getElementById("preco") as HTMLSelectElement;

    const produto = {
        id: crypto.randomUUID(),
        nome: produtoInput.value,
        cor: corInput.value,
        tamanho: tamanhoInput.value,
        preco: precoInput.value
    }

    produtos.push(produto)
    
    //salvando no history do browser 
    localStorage.setItem('produtos', JSON.stringify(produtos))
}
