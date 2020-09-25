function iniciarLoop(){
    var numero = 1;
    var quadrado = [];
    tabela = []
    tabela[0] = "<tr><th>Número</th><th>Quadrado do Número</th>"

    for(i = 0; i < 21; i++){
        quadrado[i] = numero * numero;
        tabela[i+1] = "<tr><td>" + numero + "</td><td>" + quadrado[i] + "</td></tr>";
        numero++;
    }

    document.getElementById("quadrados").innerHTML = tabela;
}