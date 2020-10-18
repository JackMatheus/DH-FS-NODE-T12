// let data = new Date
// data = data.getDate();
// console.log("Data de hoje é " + data)

// dataActual.getDay();
// console.log(getDay());

// dataActual.getDate();
// console.log(getDate);
 
// dataActual.getMoth();
// console.log(getMonth);

// dataActual.geFullYear();
// console.log(getFullYear);

// let meuAniversario = new Date(1973,10,30);
// console.log(meuAniversario.getDay().getMoth().getFullYear());

//Dia da semana - run OK
var data = new Date();
console.log("Dia: "+ data.getDay());
console.log("Dia: "+ data.getDate());


//Mes - run 1/2 OK
//const data = new Date();
console.log("Mês: "+ (data.getMonth ()+1));

//Ano - run OK
//const data = new Date();
console.log("Ano: " + data.getFullYear());

//run 1/2 OK
let meuAniversario = new Date(1973,10,30);
console.log("\naniver: " + meuAniversario.getFullYear()+" "+ (meuAniversario.getMonth()+1)+ " "+meuAniversario.getDate());



