function advinhar (){
    // let declarando variavel que pode ser mutavel
    //document.get... parta pegar o elemento do meu html que está entre ()
    // .value eu específico extamnete que quero pegar o valor do elemento.
    // parseInt - garantir que o valor passado navariavel ser´aum interio.
    alert("Entrei")
    let numero = parseInt(document.getElementById('n01').value);
    const numeroSecreto = 30;
    if (numero < numeroSecreto) {
        alert("O número é menor que o número secreto");
        
    }  else if (numero > numeroSecreto) {
        alert("O número é maior que o número secreto");
    } else if (numero == numeroSecreto) {
        alert()
    } else if (numero == numeroSecreto) {
        alert("Você acertou!");
    }
    

}
    
