let listaDeNumerosSorteados = [];
let numeroMaximoSortear = 10;
let numeroSecreto = gerarNumeroAleatorio();
let contadorTentaivas = 1;


function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random()*10+1);
    let tamanhoDaLista = listaDeNumerosSorteados.length;
    if (tamanhoDaLista == numeroMaximoSortear) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (numeroSecreto == chute) {
        exibirTextoNaTela('h1', 'PARABÉNS');
        let pluralTentativas = contadorTentaivas == 1 ? ' tentativa ' : ' tentativas ';
        let mensagemDeAcerto = 'Você acertou o número Secreto em ' + contadorTentaivas + pluralTentativas;
        exibirTextoNaTela('p', mensagemDeAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > chute) {
            exibirTextoNaTela('p', 'O número secreto é maior');
        } else {
            exibirTextoNaTela('p', 'O número secreto é menor');
            
            limparCampo();
        }
        limparCampo();
        contadorTentaivas++;
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    limparCampo();
    contadorTentaivas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Digite um número entre 1 e ' + numeroMaximoSortear);
}

mensagemInicial();
