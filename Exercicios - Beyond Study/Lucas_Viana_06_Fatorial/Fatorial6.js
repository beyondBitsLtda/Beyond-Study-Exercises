let entrada = prompt("Digite um número inteiro positivo:");
let numero = parseInt(entrada);
let fatorial = 1;

if (isNaN(numero) || numero < 0) {
    alert("Por favor, digite um número inteiro positivo válido.");
} else {
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    alert("O fatorial de " + numero + " é " + fatorial);
}
