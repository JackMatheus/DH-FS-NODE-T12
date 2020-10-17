let nome = 'Pet Shop'
​
// exibindo valor da variável nome no console
console.log(nome)
​
// criando um array contendo objetos, onde, a idéia deste array é criar uma lista de animais
// de modo que cada objeto irá representar um animal dentro da nossa lista de pets
let pets = [
  {
    nome: 'Tutti',
    tipo: 'cachorro',
    banho: true,
    tosa: true,
    idade: 6,
    genero: 'Masculino',
    vacinado: true
  },
  {
    nome: 'Pituco',
    tipo: 'cachorro',
    banho: true,
    tosa: true,
    idade: 6,
    genero: 'Masculino',
    vacinado: true
  }
];

function cadastrarPet(objetoPet){
    if(objetoPet=="object"){
        pets.push(objetoPet)
        console.log(pets)
    }else{"Informe o pet que deseja cadastrar"}
}

let novoPet={
    nome: 'novo Pet',
    tipo: 'cachorro',
    banho: true,
    tosa: true,
    idade: 6,
    genero: 'Masculino',
    vacinado: true
}

cadastrarPet(novoPet)














function servicosPrestados( pets[0].nome, darBanhoNoPet, tosarPet){
    pets[0].nome() 




    console.log("Informe o serviço desejado, 1- banho, 2- tosa");



    console.log(O servico de tomar banho foi realizado com sucesso no pet + yoshi)
    console.log(O servico de tosa foi realizado com sucesso no pet  + yoshi)
}