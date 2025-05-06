function contar() {
  // Obtém o texto do elemento com id 'texto'
  let texto = document.getElementById('texto').value;
  
  // Divide o texto em palavras
  const numPalavras = texto.split(/\s+/);

  // Remover elementos vazios que possam ter sido criados por espaços extras
  const palavrasFiltradas = numPalavras.filter(palavra => palavra.length > 0);
  
  // Conta o número de palavras
  const totalPalavras = palavrasFiltradas.length;
  
  // Exibe o resultado no console para debugging
  console.log("Palavras encontradas:", palavrasFiltradas);
  
  // Exibe o resultado em um alerta
  alert(`O texto contém ${totalPalavras} palavra(s).`);
  
  // Se precisar retornar o valor para outra função
  return totalPalavras;
}
