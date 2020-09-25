function calcularSalario(){
    var horasTrabalhadas = document.getElementById("horasTrabalhadas").value;
    horasTrabalhadas = parseFloat(horasTrabalhadas);
    var salarioMinimo = document.getElementById("salarioMinimo").value;
    salarioMinimo = parseFloat(salarioMinimo);

    var valorHora = salarioMinimo / 2;
    var salarioBruto = horasTrabalhadas * valorHora;
    var imposto = salarioBruto * 0.03;
    var salarioLiquido = salarioBruto - imposto;

    document.getElementById("totalHoras").innerHTML = horasTrabalhadas;
    document.getElementById("valorHora").innerHTML = valorHora;
    document.getElementById("salarioBruto").innerHTML = salarioBruto;
    document.getElementById("imposto").innerHTML = imposto;
    document.getElementById("salarioLiquido").innerHTML = salarioLiquido;
    
}