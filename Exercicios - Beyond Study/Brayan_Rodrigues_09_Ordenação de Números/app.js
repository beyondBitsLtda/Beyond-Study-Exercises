let lista = [87,2,3,4,5];
function adicionar (event){
    // Lista global

  const botaoClicado = event.target.id;
  
    if (botaoClicado === "add") {
      alert("Usuário clicou em ADICIONAR");
  
      // Pega o novo item do input
      let novoItem = document.getElementById('lista').value.trim();
  
      // Adiciona se não for vazio
      if (novoItem !== "") {
        lista.push(novoItem);
        if (!isNaN(novoItem) && novoItem >= 0) {
          // Só executa se o botaoClicado for um número válido e não negativo
          alert("Lista atualizada: " + lista.join(", "));
      } else  {
        alert("Insira apenas valores númeicos");
      }
    function ordenar (a,b){
      return (a - b);
    }
    lista.sort(ordenar)
    alert(lista);

    }
  
    }
}

