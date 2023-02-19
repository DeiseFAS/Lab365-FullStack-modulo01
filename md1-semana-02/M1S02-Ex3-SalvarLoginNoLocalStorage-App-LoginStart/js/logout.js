
let botaoLogout = document.querySelector("#logout")


function logoutPagina(){
    location.href = "../M1S02-Ex3-SalvarLoginNoLocalStorage-App-LoginStart/index.html"
}

botaoLogout.addEventListener("click", logoutPagina)