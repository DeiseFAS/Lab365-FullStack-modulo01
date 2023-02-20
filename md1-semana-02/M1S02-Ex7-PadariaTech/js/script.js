//let price = document.querySelector("#price")
let botaoCalcular = document.querySelector("button")



function calcular() {

    let preco = parseFloat(document.getElementById("preco").value);
    let resposta = document.getElementById('resposta');
    let tabela = '';


    for (let i = 1; i <= 50; i++) {

        let total = i * preco;

        newTotal = total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        tabela += i + " - " + newTotal + "<br />";

        resposta.innerHTML = tabela;


    }


}

botaoCalcular.addEventListener("click", calcular)