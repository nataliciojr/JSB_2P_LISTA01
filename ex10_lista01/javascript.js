var nome = prompt("Digite seu nome completo:", "Natalicio Junior").trim();
var quantidade = parseInt(prompt("Digite um número inteiro positivo:", "10"));

if (nome === '' || isNaN(quantidade) || quantidade <= 0) {
    alert("Insira um nome e um número inteiro positivo.");
} else {
    let resultado = '';
    for (let i = 0; i < quantidade; i++) {
        resultado += nome + '\n';
    }
    alert(resultado);
}
