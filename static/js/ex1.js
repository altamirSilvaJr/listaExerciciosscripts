
function calcularIMC(){
var altura = document.getElementById("altura");
altura = altura.value;
var peso = document.getElementById("peso");
peso = peso.value;
var imc = peso / Math.pow(altura, 2);
var mensagem;

if(imc < 20){
    mensagem = `Seu imc é de ${imc.toFixed(2)}. Você está abaixo do peso.`
}else if( imc >= 20 && imc < 25){
    mensagem = `Seu imc é de ${imc.toFixed(2)}. Você está no peso ideal.`
}else{
    mensagem = `Seu imc é de ${imc.toFixed(2)}. Você está acima do peso.`
}

document.getElementById("resultadoIMC").innerHTML = mensagem;
}