function operar (){
    // let declarando variavel que pode ser mutavel
    //document.get... parta pegar o elemento do meu html que está entre ()
    // .value eu específico extamnete que quero pegar o valor do elemento.
    // parseInt - garantir que o valor passado navariavel ser´aum interio.
    let operacao = document.getElementById('opcoes').value;
    let numero_02 = parseInt(document.getElementById('n01').value);
    let numero_01 = parseInt(document.getElementById('n02').value);

    if (operacao == "somar") {
        resultado = numero_01 + numero_02;
        alert(`Resultado: ${resultado}`);
        
    }  else{
    if (operacao == "subtrair") {
        resultado = numero_01 - numero_02;
        alert(`Resultado: ${resultado}`);
    } else {

    if (operacao == "multiplicar") {
            resultado = numero_01 * numero_02;
            alert(`Resultado: ${resultado}`);
            
    }  else{
            
    if (operacao == "dividir") {
            resultado = numero_01 / numero_02;
            alert(`Resultado: ${resultado}`);
            
    }  else{

    }
} 
}
}
}
    


    
