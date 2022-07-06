"use strict";
// Desafio-1
const employee = {
    code: 10,
    name: 'joao'
};
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
};
//Desafio-3
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = 0;
function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
