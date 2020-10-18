const json = require("./json");

let pets = [
  { id:1,
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
  },
  { id:2,
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos: []
  }
];
//function listarPets()
// const listarPets = () => {
//   for (let i = 0; i < pets.length; i++) {
//     console.log("Nome: " + pets[i].nome + "\n" + "Tipo: " + pets[i].tipo);
//   }
//   console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
// }

//foreach

const listarPets = (pets) => {
    pets.forEach(element => {
        console.log("Nome: " + [element.nome] + "\n" + "Tipo:" + [element.tipo]);
    });
    console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
}


// listarPets()
//function validaDados
const validaDados = (objetoPet) => {
  return (
    typeof objetoPet.nome === 'string' &&
    typeof objetoPet.tipo === 'string' &&
    typeof objetoPet.raca === 'string' &&
    typeof objetoPet.idade === 'number' &&
    typeof objetoPet.genero === 'string' &&
    typeof objetoPet.vacinado === 'boolean'
  ) 
}
//function cadastrarPet
const cadastrarPet = (objetoPet) =>{
  if (typeof objetoPet == "object") {  
    if(validaDados(objetoPet)){
      pets.push(objetoPet)
      console.log(pets)
    } else {
      console.log("O objeto informado não possui todas as propriedades necessárias")
    }
  } else {
    console.log("Informe um objeto para cadastrar um novo pet")
  }
}

let novoPet = {
  nome: 'Novo Pet',
  tipo: 'gato',
  raca: 'siames',
  idade: 3,
  genero: 'Fêmea',
  vacinado: false
}

// cadastrarPet(novoPet)
//function servicosPrestados
const servicosPrestados = (pet, servicoRealizado)=>{
  servicoRealizado(pet)
}

const darBanhoNoPet=(pet)=>{
  let data = new Date();
  data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  pet.servicos.push("banho na data " + data);
  console.log("O pet " + pet.nome + " tomou banho");
}

const tosarPet=(pet)=>{
  let data = new Date();
  data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  pet.servicos.push("tosa na data " + data);
  console.log("O pet " + pet.nome + " foi tosado");
}

// servicosPrestados(pets[0], darBanhoNoPet)
// servicosPrestados(pets[0], tosarPet)

const cadastrarPetsSpreadOperator=(pets, json)=>{
  let arrayPetsJson = JSON.parse(json);
  pets.push(...arrayPetsJson)

  return pets
}

const cadastrarPetsFor=(pets, json)=>{
  let arrayPetsJson = JSON.parse(json)

  for (let index = 0; index < arrayPetsJson.length; index++) {    
    pets.push(arrayPetsJson[index])
  }

  return pets
}

const filtrarPetPorNome = (lista, nomePet) =>{
  let petsFiltrados = lista.filter((pet) => {
    return pet.nome == nomePet
  });

  if(petsFiltrados.length > 0){
    return petsFiltrados
  } else {
    return "Nenhum pet foi encontrado com o nome " + nomePet
  }
}

// Criar uma funcao removerPet que ao receber dois parametros (sendo o primeiro o ID do pet, e, o segundo 
// a lista na qual queremos remover um pet). Deveremos reconhecer o pet e excluí-lo, caso o ID passado, não
// seja encontrado na lista de pets, iremos retornar uma mensagem do tipo: "Nao encontramos nenhum pet com o id " + idPet

const removerPet = (id,lista) =>{
        let pet = lista.filter((pet) => {
          return pet.id == id
        });
        console.log(pet)

        if(pet.length > 0){
            pets.splice(id-1,1)
            console.log(pets)
          } else {
            console.log("Não encontramos nenhum pet com o id: " + id)
          }
        }
        
          removerPet(2,pets)