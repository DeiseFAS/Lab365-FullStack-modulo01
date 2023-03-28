let preco = document.querySelector('#preco')
let lista = document.querySelector('#lista')
let totalDisplay = document.querySelector('#totalDisplay')
let novoTotal = document.querySelector('#showNewTotal')

let botaoAdicionarItem = document.querySelector('#botaoAdicionarItem')
let botaoFinalizarCompra = document.querySelector('#botaoFinalizarCompra')

let total = 0

function add() {

    let novoPreco = Number(preco.value)
    total += novoPreco;

    let emTela = document.createElement("li");
    let texto = document.createTextNode(`Produto:  ${novoPreco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} `)
    emTela.appendChild(texto);
    lista.appendChild(emTela);
    
    totalDisplay.innerHTML = `Total: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
}

function calcular() {

    let money = prompt('Digite: valor para o pagamento?')
    let formatedMoney = money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    if (money > 0 && money >= total) {
        let change = money - total;
        let formatedChange = change.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        novoTotal.innerHTML = `Pagamento  ${formatedMoney} :<br>
      Troco:     ${formatedChange}`
    } else {
        novoTotal.innerHTML = "VALOR INVALIDO! Por favor, digitar um valor valido."
    }
}

botaoAdicionarItem.addEventListener('click', add)
botaoFinalizarCompra.addEventListener('click', calcular)



