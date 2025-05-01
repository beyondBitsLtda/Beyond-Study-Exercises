let numeros = [];

for (let i = 0; i < 5; i++) {
    let entrada = prompt(`Digite o ${i + 1}º número:`);
    let numero = parseFloat(entrada);

    if (!isNaN(numero)) {
        numeros.push(numero);
    } else {
        alert("Valor inválido. Por favor, insira um número.");
        i--; // repete a mesma posição se o valor for inválido
    }
}

numeros.sort((a, b) => a - b);

alert("Números em ordem crescente:\n" + numeros.join(", "));
