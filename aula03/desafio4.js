let nomeDesafio = 'Desafio Pet Shop';

console.log(nomeDesafio)

function nomeservicosPrestados(nomePet){
console.log ("\nNome do Pet é " + nomePet)
}

function servicosPrestados(darBanhoNoPet, tosarPet){
    if(darBanhoNoPet==true){
    console.log("O servico de tomar banho foi realizado com sucesso no pet")}
    if (tosarPet==true){
        console.log("O servico de tosa foi realizado com sucesso no pet")}
    
    }


 nomeservicosPrestados("Yoshi")  
 servicosPrestados(true, true)
