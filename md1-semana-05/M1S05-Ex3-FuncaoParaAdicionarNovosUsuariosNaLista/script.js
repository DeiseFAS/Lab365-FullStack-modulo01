let lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
let novaLista = []






let nome = document.getElementById("nome")
let botaoInserir = document.getElementById("inserir")


function addLista(){
    lista.push(nome.value)
    console.log("lista", lista)
}




botaoInserir.addEventListener("click", addLista)




// novoTotal.innerHTML = "VALOR INVALIDO! Por favor, digitar um valor valido."

// push
// for
// includs para comparação ou faid dentro do for