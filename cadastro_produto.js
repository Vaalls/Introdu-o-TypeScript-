"use strict";
let cores = ["amarelo", "azul", "vermelho"];
let corSelect = document.getElementById("cor");
cores.forEach(cor => {
    let option = document.createElement('option');
    option.text = cor;
    option.value = cor;
    corSelect.appendChild(option);
});
let tamanhos = ["P", "M", "G"];
let tamanhoSelect = document.getElementById("tamanho");
tamanhos.forEach(tamanho => {
    let option = document.createElement('option');
    option.text = tamanho;
    option.value = tamanho;
    tamanhoSelect.appendChild(option);
});
