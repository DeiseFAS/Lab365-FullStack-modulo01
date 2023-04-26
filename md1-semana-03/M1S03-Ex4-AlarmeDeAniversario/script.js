
function iniciar() {
    const dataAtual = document.getElementById("dataAtual").value;
    const dataAniversario = document.getElementById("dataAniversario").value;
  
    const diffInMs = new Date(dataAniversario) - new Date(dataAtual);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  
    let resposta = document.querySelector("#resposta");
    let resposta1 = document.querySelector("#resposta1");
  
    if (diffInMs == 0) {
      resposta.innerText = "Feliz Aniversário!";
      clearTimeout(interval);
    } else {
      resposta1.innerText = `Faltam ${diffInDays} dias para o seu aniversário.`;
    }
  }
    
  
  













// let resposta = document.querySelector('#resposta');
// let resposta1 = document.querySelector('#resposta1');

// const dataAtual = '2023/04/26';
// const aniversario = '2023/05/10';

// const diferencaEmMs = new Date(aniversario) - new Date(dataAtual);
// const diferencaEmDias = Math.round(diferencaEmMs / (1000 * 60 * 60 * 24));

// let intervalo = null;

// function iniciar() {
//   if (intervalo !== null) {
//     clearInterval(intervalo);
//   }

//   let componente = document.createElement('p');

//   if (diferencaEmMs === 0) {
//     componente.innerText = 'Feliz Aniversário!';
//     resposta.appendChild(componente);
//   } else if (diferencaEmDias > 0) {
//     componente.innerText = `Faltam ${diferencaEmDias} dias para o seu aniversário`;
//     resposta1.appendChild(componente);
//     intervalo = setInterval(iniciar, 10000);
//   } else {
//     componente.innerText = `Seu aniversário foi há ${Math.abs(diferencaEmDias)} dias atrás!`;
//     resposta.appendChild(componente);
//   }
// }