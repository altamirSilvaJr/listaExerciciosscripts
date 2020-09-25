function iniciarLoop(){
    var numero = 1;
    var quadrado = [];
    tabela = []
    tabela[0] = "<tr><th>Múltiplos de 5</th></tr>"

    for(i = 0; i <= 500; i++){
        if(numero % 5 == 0){
            tabela[i+1] = "<tr><td>" + numero + "</td></tr>";
        }
        
        numero++;
    }

    document.getElementById("mult5").innerHTML = tabela;
}