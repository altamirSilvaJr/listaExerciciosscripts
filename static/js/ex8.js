var totalVotos = 0;
var candidato1 = 0;
var candidato2 = 0;
var votosBrancos = 0;
var votosNulos = 0;

function votar(){
    var voto = document.getElementById("voto").value;
    voto = parseInt(voto);
    console.log(voto)
    if(voto == 1){
        candidato1++;
    }else if(voto == 2){
        candidato2++;
    }else if(voto == 3){
        votosBrancos++;
    }else{
        votosNulos++;
    }
    
    totalVotos++;

    document.getElementById("totalVotos").innerHTML = totalVotos;
    document.getElementById("candidato1").innerHTML = `${((100*candidato1)/totalVotos).toFixed(2)}%`;
    document.getElementById("candidato2").innerHTML = `${((100*candidato2)/totalVotos).toFixed(2)}%`;
    document.getElementById("votosBrancos").innerHTML = `${((100*votosBrancos)/totalVotos).toFixed(2)}%`;
    document.getElementById("votosNulos").innerHTML = `${((100*votosNulos)/totalVotos).toFixed(2)}%`;




}