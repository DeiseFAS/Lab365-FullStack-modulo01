let listaNomes = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']

let listaFrutas = [ 'Banana', 'Morango', 'Maçã', 'Uva', 'Pêra' , 'Laranja']
listaFrutas = listaFrutas.reverse();

let listaMista = []

for(let i in listaNomes){
    listaMista.push(listaNomes[i]+ "-" +listaFrutas[i])
}

console.log(listaMista)



// O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. 
// O laço pode ser executado para cada propriedade distinta do objeto.













