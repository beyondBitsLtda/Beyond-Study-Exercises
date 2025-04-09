let lista = ["maçã", "arroz"];
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
    }

    alert("Lista atualizada: " + lista.join(", "));

  } else if (botaoClicado === "remove") {
    alert("Usuário clicou em REMOVER");

    let itemRemover = document.getElementById('lista').value.trim();

    // Remove o item, se existir
    lista = lista.filter(item => item.toLowerCase() !== itemRemover.toLowerCase());

    alert("Lista após remoção: " + lista.join(", "));
  }
}

