function calcular(numero1,numero2,operacao){
    operacao(numero1,numero2)}

function soma(numero1, numero2){
    console.log(numero1 + numero2)
  }
  
  function subtrai(numero1, numero2){
    console.log(numero1 - numero2)
  }
  
  function multiplica(numero1, numero2){
    console.log(numero1 * numero2)
  }
  
  function divide(numero1, numero2){
    console.log(numero1 / numero2)
  }
  
  calcular(10, 20, soma)
  calcular(20, 10, subtrai)
  calcular(10, 20, multiplica)
  calcular(10, 2, divide)
  