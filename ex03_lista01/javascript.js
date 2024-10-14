var nomeCompleto = prompt("Qual seu nome completo" , "Natalicio Junior");
var idade = prompt("Qual sua idade?" , "18");
console.log(idade);


if (idade >= 18) {
    alert(`${nomeCompleto} tem idade para tirar habilitação com ${idade} anos `);
}else {
    var anosFaltante = 18 - idade;
    alert(`${nomeCompleto} não tem idade para tirar habilitação ainda falta ${anosFaltante} anos`)

}