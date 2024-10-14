var nomeCompleto = String(prompt("Informe seu nome completo" , "Natalicio Junior"));

var letrasMaiuscula = "";

for( i = 0; i < nomeCompleto.length; i++) {
    let caractere  = nomeCompleto[i];

    if (caractere >= 'A' && caractere <= 'Z')
        letrasMaiuscula += caractere;

}

alert("Letras maiúsculas no seu nome: " + letrasMaiuscula);