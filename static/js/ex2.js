function classificarNadador(){
    var nome = document.getElementById("nomeNadador").value;
    var idade = document.getElementById("idadeNadador").value;
    var classificacao;

    if(idade >= 5 && idade <= 7){
        classificacao = "Infantil A";
    }else if(idade >= 8 && idade <= 10){
        classificacao = "Infantil B";
    }else if(idade >= 11 && idade <= 13){
        classificacao = "Juvenil A";
    }else if(idade >= 14 && idade <= 17){
        classificacao = "Juvenil B";
    }else if(idade > 17){
        classificacao = "Sênior";
    }else{
        classificacao = "Não existe categoria para essa idade"
    }

    document.getElementById("nomeTabela").innerHTML = nome;
    document.getElementById("idadeTabela").innerHTML = idade;
    document.getElementById("classificacao").innerHTML = classificacao;

}