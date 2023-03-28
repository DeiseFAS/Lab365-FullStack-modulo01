var assert = require('assert');

var contarVogais = function(palavra) {
    var totalVogal = 0;
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    var i;

    for (i = 0; i < palavra.length; i++ ) {
        if(vogais.indexOf(palavra[i]) != -1) {
            totalVogal++;
        }
    }

    return totalVogal;
}


//
// Seu teste
//
try {
    assert.equal(6, contarVogais("abecedario"));
} catch(e) {
    console.log(e);
}

