var totalVotos = 0;
var idade = [];
var otimo = 0;
var bom = 0;
var regular = 0;
var ruim = 0;
var totalIdade = 0;

function votar() {
    var confereIdade = document.getElementById("idade").value;
    confereIdade = parseInt(confereIdade);
    if (confereIdade < 1) {
        document.getElementById("idadeErrada").innerHTML = "Você digitou uma idade inválida, por favor, entre com uma idade válida."
    } else {
        document.getElementById("idadeErrada").innerHTML = ""
        var voto = document.getElementById("voto").value;
        voto = parseInt(voto);
        if (voto == 1) {
            otimo++;
            idade.push(confereIdade)
        } else if (voto == 2) {
            bom++;
            idade.push(confereIdade)
        } else if (voto == 3) {
            regular++;
            idade.push(confereIdade)
        } else if (voto == 4) {
            ruim++;
            idade.push(confereIdade)
        }

        totalVotos++;

        var mediaIdade = 0;
        for (i = 0; i < idade.length; i++) {
            mediaIdade = mediaIdade + idade[i];
        }
        mediaIdade = mediaIdade / idade.length;

        document.getElementById("totalVotos").innerHTML = totalVotos;
        document.getElementById("mediaIdade").innerHTML = `${(mediaIdade).toFixed(2)}%`;;
        document.getElementById("otimo").innerHTML = `${((100 * otimo) / totalVotos).toFixed(2)}%`;
        document.getElementById("bom").innerHTML = `${((100 * bom) / totalVotos).toFixed(2)}%`;
        document.getElementById("regular").innerHTML = `${((100 * regular) / totalVotos).toFixed(2)}%`;
        document.getElementById("ruim").innerHTML = `${((100 * ruim) / totalVotos).toFixed(2)}%`;


    }
}