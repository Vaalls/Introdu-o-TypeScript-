<<<<<<< HEAD
// criando variavel global, lista de objetos produtos 
var produtos :{id:string, nome:string, cor:string, tamanho:string, preco:string} [] = []

//preenchendo as opções de cores no HTML
let cores = ["amarelo","azul", "vermelho", "rosa"]
=======
//preenchendo as opções de cores no HTML
let cores = ["amarelo","azul", "vermelho"]
>>>>>>> master
let corSelect = document.getElementById("cor") as HTMLSelectElement

cores.forEach(cor => {
    let option = document.createElement('option');
    option.text = cor;
    option.value = cor;
    corSelect.appendChild(option)
})

//preenchendo as opções de tamanho no HTML
<<<<<<< HEAD
let tamanhos = ["P","M","G","GG"]
let tamanhoSelect = document.getElementById("tamanho") as HTMLSelectElement
tamanhos.forEach(tamanho => {
    let option = document.createElement("option");
=======
let tamanhos = ["P","M","G"]
let tamanhoSelect = document.getElementById("tamanho") as HTMLSelectElement

tamanhos.forEach(tamanho => {
    let option = document.createElement('option');
>>>>>>> master
    option.text = tamanho;
    option.value = tamanho;
    tamanhoSelect.appendChild(option)
})
<<<<<<< HEAD
// Função LOAD
function load(){
    //ler o local do storage
    const produtosFromStorage = localStorage.getItem('produtos')
    if(produtosFromStorage)
        produtos = JSON.parse(produtosFromStorage)

    let tabelaProduto = document.getElementById("tblProduto") as HTMLTableElement
    const tbody = tabelaProduto.getElementsByTagName("tbody")[0]
    tbody.innerHTML = ''

    produtos.forEach(function(produto){
        const row = tbody.insertRow() //criando tr do HTML
        row.insertCell(0).innerHTML = produto.id
        row.insertCell(1).innerHTML = produto.nome
        row.insertCell(2).innerHTML = produto.cor
        row.insertCell(3).innerHTML = produto.tamanho
        row.insertCell(4).innerHTML = produto.preco
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Remover"
        //evento e função delete
        deleteButton.addEventListener('click', function(){
            const idProduto = row.cells[0].textContent
            const produto = row.cells[1].textContent
            const mensagem = `Confirma a remoção do produto ${produto}?`
            
            if(confirm(mensagem) == true){
                //filter: percorre uma lista 
                produtos = produtos.filter(function(produto){
                    return produto.id !== idProduto
                })
                
                //remover da tabela HTML
                row.remove()

                //atualizando o local storage
                localStorage.setItem("produtos",JSON.stringify(produtos))

            }
        })        
        row.insertCell(5).appendChild(deleteButton)
        //criando botão
        const editButton = document.createElement("button")
        editButton.textContent = "Editar" 
        editButton.addEventListener("click", function(){
            const idProduto = row.cells[0].textContent
            const produto = row.cells[1].textContent
            const cor = row.cells[2].textContent
            const tamanho = row.cells[3].textContent
            const preco = row.cells[4].textContent

            let inputProduto = document.getElementById("produto") as HTMLInputElement;
            inputProduto.value = String(produto) 
            let inputCor = document.getElementById("cor") as HTMLSelectElement
            inputCor.value =  String(cor)
            let inputTamanho = document.getElementById("tamanho") as HTMLSelectElement
            inputTamanho.value =  String(tamanho)
            let inputPreco = document.getElementById("preco") as HTMLInputElement
            inputPreco.value =  String(preco)

            //filter: percorre uma lista 
            produtos = produtos.filter(function(produto){
                return produto.id !== idProduto
            })
            
            //remover da tabela HTML
            row.remove()
            
            //atualizando o local storage
            localStorage.setItem("produtos",JSON.stringify(produtos))

        })
        row.insertCell(5).appendChild(editButton)

    })
}

load()

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

    //Deixar o formulario vazio apos salvar
    produtoInput.value = ""
    corInput.value = "0"
    tamanhoInput.value = "0"
    precoInput.value = ""

    produtos.push(produto)
    console.log(produtos)

    //salvando no storage do browser 
    localStorage.setItem('produtos', JSON.stringify(produtos))
    load()
}
=======


>>>>>>> master
