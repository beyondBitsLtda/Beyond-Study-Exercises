function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "PAR";
    } else {
        return "ÍMPAR";
    }
}

let entrada = prompt("Digite um número:");
let numero = parseInt(entrada);

if (!isNaN(numero)) {
    alert("O número " + numero + " é " + parOuImpar(numero));
} else {
    alert("Entrada inválida. Por favor, digite um número.");
}
