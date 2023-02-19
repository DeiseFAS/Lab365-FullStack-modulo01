let resposta = document.getElementById('resposta')
let tempo = 10;
let intervalo;

let botaoIniciar = document.querySelector("button")

function iniciar() {
    if (tempo >= 0) {
        resposta.innerHTML = tempo--
    } else {
        resposta.innerHTML = 'Seu tempo acabou!<br>Tente novamente.'
        clearTimeout(intervalo)
        tempo = 10
    }
}



function comecaCronometro() {
    intervalo = setInterval(iniciar, 1000);
}


botaoIniciar.addEventListener("click", comecaCronometro)

