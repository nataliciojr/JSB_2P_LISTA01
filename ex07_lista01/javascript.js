var primeiraCorRGB = parseInt(prompt("Informa primeiro codigo RGB" , "128"));

var segundaCorRGB = parseInt(prompt("Informa segundo codigo RGB" , "0"));

var terceiraCorRGB = parseInt(prompt("Informa terceira codigo RGB" , "128"));

var texto = document.getElementById('texto');

texto.style.color = 'rgb(' + primeiraCorRGB + ',' + segundaCorRGB + ',' + terceiraCorRGB + ')';


