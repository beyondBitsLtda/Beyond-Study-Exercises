function operar (){
    // let declarando variavel que pode ser mutavel
    //document.get... parta pegar o elemento do meu html que está entre ()
    // .value eu específico extamnete que quero pegar o valor do elemento.
    // parseInt - garantir que o valor passado navariavel ser´aum interio.
    let numero = parseInt(document.getElementById('n01').value);
    let numeroFatorial = 1; // Inicializa com 1 (elemento neutro da multiplicação)

    if (numero <=0) {
        alert("Esse número é menor  ou igual a zero. Insira um  número inteiro maior que zero para prosseguir");
        
    }  else{
    alert("Entrei")
    for (let fator = numero; fator > 0; fator -= 1) {
        numeroFatorial *= fator; // Multiplica o acumulador pelo fator atual, ele multiplica e acumula o valor.
    }
    alert(numeroFatorial);

}
    
}