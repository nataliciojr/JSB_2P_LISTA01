var numero1 = parseFloat(prompt("Qual o primeiro número?", "10"));
var operador = prompt("Qual a operação?", "+");
var numero2 = parseFloat(prompt("Qual o segundo número?", "10"));

var resultado;

if (operador === "+") {
    resultado = numero1 + numero2;
} else if (operador === "-") {
    resultado = numero1 - numero2;
} else if (operador === "*") {
    resultado = numero1 * numero2;
} else if (operador === "/") {
    resultado = numero1 / numero2;
} else {
    resultado = "Operador inválido";
}

alert("Resultado: " + resultado);
