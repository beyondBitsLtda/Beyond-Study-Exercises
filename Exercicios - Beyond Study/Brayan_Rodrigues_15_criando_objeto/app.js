function carros() {
  alert("entrou");

  let marca = document.getElementById('marca').value;
  let cor = document.getElementById('cor').value;
  let ano = parseInt(document.getElementById('ano').value); // Corrigido "valeu" para "value"

  const carro = {
    marca: marca,
    cor: cor,
    ano: ano
  }

  // Para mostrar os valores do objeto, mostramos cada propriedade separadamente
  // ou convertemos o objeto para string JSON
  alert("Marca: " + carro.marca + ", Cor: " + carro.cor + ", Ano: " + carro.ano);
  
  // Alternativa usando JSON
  // alert(JSON.stringify(carro));
}

