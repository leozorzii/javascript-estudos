const html = document.querySelector('html');

const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');
let tempoEmAndamento = false;
const musicaFocoInput = document.querySelector('#alternar-musica');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const tempoNaTela = document.querySelector('#timer');

// caminho relativo para evitar 404 fora da raiz do servidor.
const musica = new Audio('./sons/luna-rise-part-one.mp3');
let tempoDecorridoEmSegundos = 3600;
let intervaloId = null;
const audioPlay = new Audio('./sons/play.wav');
const audioPausa = new Audio('./sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3');

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    // evento do tipo check box
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 3600;
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
     tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});

function alterarContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function (botao) {
        botao.classList.remove('active');
    });

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);

    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br> <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case 'descanso-curto':
            // ALTERACAO 2: escape Unicode evita texto corrompido por diferenca de encoding.
            titulo.innerHTML = `Que tal dar uma respirada?  <strong class="app__title-strong">Fa\u00e7a uma pausa curta!!.</strong>`;
            break;
        case 'descanso-longo':
            // ALTERACAO 2.1: escape Unicode evita texto corrompido por diferenca de encoding.
            titulo.innerHTML = `Hora de voltar a superficie.  <strong class="app__title-strong">Fa\u00e7a uma pausa longa.</strong>`;
            break;
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        audioTempoFinalizado.play();
        alert('tempo finalizado!');
        zerar();
        return;
    }

    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
};

startPauseBt.addEventListener('click', () => {
    iniciarOuPausar();
});

function iniciarOuPausar() {
    if (intervaloId) {
        audioPausa.play();
        zerar();
        return;
    }

    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarBt.innerHTML = '<strong>Pausar</strong>';
}

function zerar() {
    clearInterval(intervaloId);
    // ALTERACAO 2: escape Unicode evita texto corrompido por diferenca de encoding.
    iniciarOuPausarBt.innerHTML = '<strong>Come\u00e7ar</strong>';
    intervaloId = null;
}

function mostrarTempo() {
    const minutos = Math.floor(tempoDecorridoEmSegundos / 60);
    const segundos = tempoDecorridoEmSegundos % 60;
    tempoNaTela.innerHTML = `${String(minutos).padStart(2,0)}:${String(segundos).padStart(2,0)}`;
}

// ALTERACAO 4: mostra o tempo inicial ao carregar a pagina.
mostrarTempo();
