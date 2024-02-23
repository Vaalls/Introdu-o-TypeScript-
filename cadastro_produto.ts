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


