function calcularSalario(){
    var salarioAtual = document.getElementById("salarioAtual").value;
    salarioAtual = parseFloat(salarioAtual)
    var reajuste;
    var novoSalario;
    if(salarioAtual < 1000){
        reajuste = "15%";
        novoSalario = salarioAtual + (salarioAtual * 0.15);
    }else if(salarioAtual >= 1000 && salarioAtual <= 1500){
        reajuste = "10%";
        novoSalario = salarioAtual + (salarioAtual * 0.10);        
    }else{
        reajuste = "5%";
        novoSalario = salarioAtual + (salarioAtual * 0.05);
    }

    document.getElementById("atualSal").innerHTML = salarioAtual;
    document.getElementById("reajuste").innerHTML = reajuste;
    document.getElementById("salarioNovo").innerHTML = novoSalario;
}