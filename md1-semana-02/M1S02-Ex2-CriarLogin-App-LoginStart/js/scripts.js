
let usuario= document.getElementById("usuario")
let senha= document.getElementById("senha")
let entrar=document.getElementById("entrar")
let resultado=document.getElementById("resultado")

function validarDados(){
    if(usuario.value == "deise" && senha.value == "1234"){
        resultado.innerHTML= "Você está Logado"
    } else {
        resultado.innerHTML= "<div id='erro'>Login incorreto</div>"
    }
}

entrar.addEventListener("click",validarDados)


