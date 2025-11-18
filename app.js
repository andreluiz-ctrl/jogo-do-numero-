let numeroSecreto = gerarNumeroAleatorio();

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('h1', 'jogo do numero secreto');
exibirTexto('p', 'digite um numero entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (numeroSecreto == chute) {
        exibirTexto('p', 'parabens voce acertou');
    } else {
     if (numeroSecreto > chute) {
        exibirTexto('p', 'o numero secreto é maior');
     } else {
        exibirTexto('p', 'o numero secreto é menor');
     }   
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random()*10 +1);
}