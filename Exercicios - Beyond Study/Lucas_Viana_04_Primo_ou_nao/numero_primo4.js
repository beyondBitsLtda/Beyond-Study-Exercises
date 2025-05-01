let numero = parseInt(prompt("Digite um número:"));
let primo = true;

if (numero <= 1) {
  primo = false;
} else {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      primo = false;
      break;
    }
  }
}

if (primo) {
  alert(numero + " é primo!");
} else {
  alert(numero + " não é primo.");
}
