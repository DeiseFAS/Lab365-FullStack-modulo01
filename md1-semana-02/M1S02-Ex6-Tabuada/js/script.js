let botaoCalcular = document.querySelector("button")


function tabuada(){
    let num = parseInt(document.getElementById("num").value);
    let resposta = document.getElementById('resposta');
    let tabuada='';
  
    for(let count=1; count<=10 ; count++)
     tabuada += num+" x "+count+" = "+
                 num*count+"<br />";
    
    resposta.innerHTML = tabuada;
  }

  botaoCalcular.addEventListener("click", tabuada)