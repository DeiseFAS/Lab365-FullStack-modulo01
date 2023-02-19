//Página de cadastro



let usuarioCadastro = document.querySelector("#cadastro #usuario")
let emailCadastro = document.querySelector("#cadastro #email")
let senhaCadastro = document.querySelector("#cadastro #senha")
let botaoCadastrar = document.querySelector("#cadastro #cadastrar")
let resultadoCadastro = document.querySelector("#cadastro #resultado")

function armazenarDados(){
    if(usuarioCadastro.value =="" || emailCadastro.value == "" || senhaCadastro.value ==""){
        resultadoCadastro.innerHTML = "<p id='preenchaTodosCampos'>Preencha todos os campos!</p>"
    }else{
    localStorage.setItem('usuario', usuarioCadastro.value);
    localStorage.setItem('email', emailCadastro.value);
    localStorage.setItem('senha', senhaCadastro.value);

    usuarioCadastro.value = ""
    emailCadastro.value = ""
    senhaCadastro.value = ""

    resultadoCadastro.innerHTML = "<p>Usúario cadastrado com sucesso!<br><br>Você será redirecionado para a tela de login.</p>"

    setTimeout(function(){
        location.href = "../M1S02-Ex3-SalvarLoginNoLocalStorage-App-LoginStart/index.html"
    }, 3000)
}
}
 
botaoCadastrar.addEventListener("click", armazenarDados)
