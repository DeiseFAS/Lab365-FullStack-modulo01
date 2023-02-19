let usuarioAlterar = document.querySelector("#alterarDados #usuario")
let emailAlterar = document.querySelector("#alterarDados #email")
let senhaAlterar = document.querySelector("#alterarDados #senha")
let botaoAlterar = document.querySelector("#alterarDados #salvar")
let resultadoAlterar = document.querySelector("#alterarDados #resultadoAlterar")
let botaoCancelar = document.querySelector("#alterarDados #cancelar")

function alterarDados(){
    if(usuarioAlterar.value =="" || emailAlterar.value == "" || senhaAlterar.value ==""){
        resultadoAlterar.innerHTML = "<p id='preenchaTodosCampos'>Preencha todos os campos!</p>"
    }else{
    localStorage.setItem('usuario', usuarioAlterar.value);
    localStorage.setItem('email', emailAlterar.value);
    localStorage.setItem('senha', senhaAlterar.value);

    usuarioAlterar.value = ""
    emailAlterar.value = ""
    senhaAlterar.value = ""

    resultadoAlterar.innerHTML = "<p>Dados Alterados com sucesso!<br><br>Você será redirecionado para a tela de login.</p>"

    setTimeout(function(){
        location.href = "../M1S02-Ex4-OperacoesNaConta-App-LoginStart/index.html"
    }, 3000)
}
}

function cancelarAlteracao(){
    resultadoAlterar.innerHTML = "<p id='alteracaoCancelada'>Alteração Cancelada!<br>Você será redirecionado para a tela de cadastro. </p>"
    
    setTimeout(function(){
        location.href = "../M1S02-Ex4-OperacoesNaConta-App-LoginStart/cadastro.html"
    }, 3000)
}
 
botaoAlterar.addEventListener("click", alterarDados)
botaoCancelar.addEventListener("click", cancelarAlteracao)