//Página de cadastro



let usuarioCadastro = document.querySelector("#cadastro #usuario")
let emailCadastro = document.querySelector("#cadastro #email")
let senhaCadastro = document.querySelector("#cadastro #senha")
let botaoCadastrar = document.querySelector("#cadastro #cadastrar")
let resultadoCadastro = document.querySelector("#cadastro #resultado")
let botaoAlterarDados = document.querySelector("#cadastro #botaoAlterarDados")

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
        location.href = "../M1S02-Ex4-OperacoesNaConta-App-LoginStart/index.html"
    }, 3000)
}
}

function alterarDados(){
    resultadoCadastro.innerHTML = "<p>Você será redirecionado para a tela de Alteração de dados!. </p>"
    
    setTimeout(function(){
        location.href = "../M1S02-Ex4-OperacoesNaConta-App-LoginStart/alterarDados.html"
    }, 3000)
}
 
botaoAlterarDados.addEventListener("click", alterarDados)
 
botaoCadastrar.addEventListener("click", armazenarDados)
