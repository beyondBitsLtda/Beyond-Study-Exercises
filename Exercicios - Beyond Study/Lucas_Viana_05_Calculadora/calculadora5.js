let num1 = parseFloat(prompt("Digite o primeiro número:"));
let operacao = prompt("Digite a operação (+, -, *, /):");
let num2 = parseFloat(prompt("Digite o segundo número:"));
let resultado;

if (operacao === "+") {
  resultado = num1 + num2;
} else if (operacao === "-") {
  resultado = num1 - num2;
} else if (operacao === "*") {
  resultado = num1 * num2;
} else if (operacao === "/") {
  if (num2 !== 0) {
    resultado = num1 / num2;
  } else {
    resultado = "Erro: divisão por zero";
  }
} else {
  resultado = "Operação inválida";
}

alert("Resultado: " + resultado);
