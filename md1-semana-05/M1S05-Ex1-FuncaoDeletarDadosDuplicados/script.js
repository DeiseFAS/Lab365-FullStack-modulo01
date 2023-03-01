let lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José']

let novaLista = lista.filter(function(item, i) {
    return lista.indexOf(item) === i;


});

console.log(novaLista);

// i é o index ( indice do array)
// indexOf é um metodo de Array, ele encontra um item dentro do Array.