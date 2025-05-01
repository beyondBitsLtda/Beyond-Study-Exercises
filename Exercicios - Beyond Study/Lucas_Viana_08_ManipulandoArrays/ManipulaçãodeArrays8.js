let listaDeCompras = [];

function menu() {
    let opcao;
    do {
        opcao = prompt(
            "Menu da Lista de Compras:\n" +
            "1 - Adicionar item\n" +
            "2 - Remover item\n" +
            "3 - Listar itens\n" +
            "4 - Sair\n" +
            "Escolha uma opção:"
        );

        switch (opcao) {
            case "1":
                let itemAdicionar = prompt("Informe o item que deseja adicionar:");
                if (itemAdicionar) {
                    listaDeCompras.push(itemAdicionar);
                    alert(`Item "${itemAdicionar}" adicionado à lista.`);
                }
                break;

            case "2":
                let itemRemover = prompt("Informe o item que deseja remover:");
                const index = listaDeCompras.indexOf(itemRemover);
                if (index !== -1) {
                    listaDeCompras.splice(index, 1);
                    alert(`Item "${itemRemover}" removido da lista.`);
                } else {
                    alert(`Item "${itemRemover}" não encontrado.`);
                }
                break;

            case "3":
                if (listaDeCompras.length === 0) {
                    alert("A lista de compras está vazia.");
                } else {
                    let itens = "Itens na lista de compras:\n";
                    listaDeCompras.forEach((item, i) => {
                        itens += `${i + 1}. ${item}\n`;
                    });
                    alert(itens);
                }
                break;

            case "4":
                alert("Encerrando o programa.");
                break;

            default:
                alert("Opção inválida. Tente novamente.");
        }

    } while (opcao !== "4");
}

menu();
