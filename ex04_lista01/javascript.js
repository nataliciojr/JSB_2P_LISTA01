var notas01 = parseFloat(prompt("Primeira Nota"));
var notas02 = parseFloat(prompt("Segunda Nota"));

var totalNotas = notas01 + notas02;

if (totalNotas > 60) {
    alert(`Aluno aprovado com ${totalNotas} pontos`)
} else {
    faltaAinda = 60 - totalNotas;
    alert(`Falta ${faltaAinda} pontos para o aluno ser aprovado`)
}