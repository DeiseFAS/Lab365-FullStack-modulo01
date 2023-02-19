
let usuario= document.getElementById("usuario")
let senha= document.getElementById("senha")
let entrar=document.getElementById("entrar")
let resultado=document.getElementById("resultado")
let usuarioAutenticado={
    usuario:"deise", 
    senha:"1234"
}

function validarDados(){
    if(usuario.value == usuarioAutenticado.usuario && senha.value == usuarioAutenticado.senha){
        resultado.innerHTML= "Você está Logado"
    } else {
        resultado.innerHTML= "<div id='erro'>Login incorreto</div>"
    }
}

entrar.addEventListener("click",validarDados)


