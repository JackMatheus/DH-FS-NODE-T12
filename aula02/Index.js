let pets = [
  {
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true
  },
  {
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false}
];

function listarPets() {
for (i = 0 ; i<pets.length; i++){

console.log("Nome: " + pets[i].nome + "\n" +"Tipo :" + pets[i].tipo);
}  
console.log("Temos o total de " + pets.length + "pet(s) registrado(s) no sistema");
}

//opção 1
// function adicionarPets(nome,tipo,raca,idade,genero,vacinado) {
//   { 
//     pets.push({nome,tipo,raca,idade,genero,vacinado});
//   }  
// }

// adicionarPets('Spike','Cachorro','Rottweiler',2,'Macho',true);
// adicionarPets('Tom','Gato','Siamês',1,'Fêmea',false);

// console.log(pets);


  