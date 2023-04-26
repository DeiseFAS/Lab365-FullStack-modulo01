let text = document.querySelector("#text");
let resposta = document.querySelector("#resposta");
let list = document.createElement("li");

let resp;
let arrayTask = [];

function adicionar() {
  arrayTask.push(text.value);
  list.innerText = `Tarefas: \n ${arrayTask}\n`;
  resposta.appendChild(list);
  text.value = "";
}

function buscar() {
  let arrayBusca = arrayTask.filter((p) => {
    return p == text.value;
  });
  if (arrayBusca == text.value) {
    alert(`O item: "${arrayBusca}" já consta na lista`);
  } else {
    alert("Tente novamente, item não encontrado");
  }
  text.value = "";
}

function alterar() {
  let pergunta1 = prompt("Digite a tarefa que você deseja incluir:");
  let pergunta = prompt("Digite a tarefa que você deseja alterar:");
  let index = arrayTask.indexOf(pergunta);
  arrayTask.splice(index, 1, pergunta1);
  list.innerText = `Tarefas:\n ${arrayTask}\n`;
  text.value = "";
}

function deletar() {
  let newList = arrayTask.filter((e) => {
    return e != text.value;
  });
  arrayTask = newList;
  list.innerText = `Tarefas:\n ${arrayTask}\n`;
  text.value = "";
}
