//Página login


let usuarioLogin = document.querySelector("#login #usuario")
let senhaLogin = document.querySelector("#login #senha")
let entrarLogin = document.querySelector("#login #entrar")
let resultadoLogin = document.querySelector("#login #resultado")
let botaoCadastroLogin = document.querySelector("#login #cadastrar")

function validarDadosLogin() {

    if (usuarioLogin.value == "" || senhaLogin.value == "") {
        resultadoLogin.innerHTML = "<p id='usuarioIncorreto'>preencha todos os campos</p>"
    } else {

        let usuarioLocalStorage = localStorage.getItem('usuario')
        let senhaLocalStorage = localStorage.getItem('senha')

        if (usuarioLogin.value == usuarioLocalStorage && senhaLogin.value == senhaLocalStorage) {
            location.href = "../M1S02-Ex3-SalvarLoginNoLocalStorage-App-LoginStart/logout.html"
        } else {
            resultadoLogin.innerHTML = "<p id='usuarioIncorreto'>Usuário e/ou senha incorretos ou não cadastrados.</p>"
        }
    }
}

function irPaginaCadastro() {
    location.href = "../M1S02-Ex3-SalvarLoginNoLocalStorage-App-LoginStart/cadastro.html"
}

entrarLogin.addEventListener("click", validarDadosLogin)
botaoCadastroLogin.addEventListener("click", irPaginaCadastro)