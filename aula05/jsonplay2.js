let pessoa = {
    nome:"vinicius",
    idade: 21,
    altura:1.80
}
//Objeto de texto
let json = JSON.stringify(pessoa)
console.log(json)

// //Formato de objeto 
let objetoDeNovo = JSON.parse(json);
console.log(objetoDeNovo)

console.log("------------Aqui-------------");


let listaCompras = ["pão","presunto","queijo"];
let json2 = JSON.stringify(listaCompras);

console.log(json2);

let arrayDeNovo = JSON.parse(json2)
console.log(json2);

arrayDeNovo.push("mortadela")
console.log(arrayDeNovo);

console.log("---------Data do misto-----------")
let dataMisto = new Date();
console.log("Dia: " + dataMisto.getDate() + ": "+ "Mês: "+ (dataMisto.getMonth ()+1)  + " : " + "Ano: " + dataMisto.getFullYear(+20));



