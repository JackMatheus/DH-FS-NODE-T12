const função = require('./callback');

funcao(function(string, numero){
    console.log(string);
    numero+=123;
    console.log(numero);
});