function operar (){
    // let declarando variavel que pode ser mutavel
    //document.get... parta pegar o elemento do meu html que está entre ()
    // .value eu específico extamnete que quero pegar o valor do elemento.
    // parseInt - garantir que o valor passado navariavel ser´aum interio.
    let numero = parseInt(document.getElementById('n01').value);

    while (numero >= 0) {
        alert(numero);
        numero = numero - 1;
    }
     alert("Fim da contagem");
    
}