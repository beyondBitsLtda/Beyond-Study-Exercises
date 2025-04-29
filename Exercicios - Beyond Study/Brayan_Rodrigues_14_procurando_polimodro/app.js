function media(){
alert("entreu");
let palindromo = document.getElementById('palavra').value;
let array = palindromo.split('');
alert(array);
  // Criar uma cópia independente e invertê-la
let arrayReverse = [...array].reverse();
alert(arrayReverse);

for (let i = 0; i < array.length; i++) {
  if (array[i] !== arrayReverse[i]) {
    return alert("nÃO");
  }
  
}

return alert("é um palíndromo");
}


