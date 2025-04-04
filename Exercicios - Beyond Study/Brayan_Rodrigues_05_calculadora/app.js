function calcular (){

    // let declarando variavel que pode ser mutavel
    //document.get... parta pegar o elemento do meu html que está entre ()
    // .value eu específico extamnete que quero pegar o valor do elemento.
    // parseInt - garantir que o valor passado navariavel ser´aum interio.
    let numero = parseInt(document.getElementById('num1').value);
    let numero_2 = parseInt(document.getElementById('num2').value);
    let operation = document.getElementById('operacao').value
    
    if (numero === ""  || numero_2 === "") {
        alert("Preencha os números a serem cálculados");
        location.reload();

} else {
    if (operation == '+') {
        resultado = numero + numero_2;
        alert(resultado);
        
    } 

    if (operation == '-') {
        resultado = numero - numero_2;
        alert(resultado);
    }

    if (operation == '*') {
        resultado = numero * numero_2;
        alert(resultado);
    }

    if (operation == '/') {
        resultado = numero / numero_2;
        alert(resultado);
    }

}
    
        
}
    