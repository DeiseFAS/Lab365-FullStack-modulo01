let numeroCelular = document.getElementById("cel")
let mensagem = document.getElementById("mensagem")
let resposta = document.getElementById("resposta")

let button = document.querySelector("button")

function geraLink(){
    resposta.innerHTML = `https://api.whatsapp.com/send?phone=${numeroCelular.value}&text=${mensagem.value.replace(" ","%20")}`
    setTimeout(function(){
        location.href = `https://api.whatsapp.com/send?phone=${numeroCelular.value}&text=${mensagem.value.replace(" ","%20")}`
    },3000)
}

button.addEventListener("click", geraLink)