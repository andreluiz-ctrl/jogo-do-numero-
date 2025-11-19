let listaDeNumerosSorteados = [];
quantidadeDeElementos = 10;
let numeroSecreto = gerarNumeroAleatorio();
let contadorTentativas = 1;

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random()*quantidadeDeElementos+1);
    let limitePossibilidades = listaDeNumerosSorteados.length;
    if (limitePossibilidades == quantidadeDeElementos) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (numeroSecreto == chute) {
        exibirMensagemNaTela('h1', 'PARABÉNS');
        let pluralTentativas = contadorTentativas > 1 ? ' tentativas ' : ' tentativa';
        let mensagemDeAcerto = 'Você acertou o número secreto em ' + contadorTentativas + pluralTentativas;
        exibirMensagemNaTela('p', mensagemDeAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > chute) {
            exibirMensagemNaTela('p', 'O número secreto é maior');
        } else {
            exibirMensagemNaTela('p', 'O número secreto é menor');
        }
        contadorTentativas++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    limparCampo();
    contadorTentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rante:1.2})
}

function mensagemInicial() {
    exibirMensagemNaTela('h1', 'Jogo do Número Secreto');
    exibirMensagemNaTela('p', 'Digite um número entre 1 e ' + quantidadeDeElementos);
}

mensagemInicial();
