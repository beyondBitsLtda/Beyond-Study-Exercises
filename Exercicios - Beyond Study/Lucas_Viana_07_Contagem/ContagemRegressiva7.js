let numero = prompt("Digite um número para a contagem regressiva:");

numero = parseInt(numero);

if (!isNaN(numero) && numero >= 0) {
    console.log("Contagem regressiva:");
    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
    console.log("Fim da contagem!");
} else {
    console.log("Por favor, digite um número válido e não negativo.");
}