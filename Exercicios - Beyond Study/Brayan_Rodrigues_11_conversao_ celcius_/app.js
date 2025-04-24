function converter (){
    // let declarando variavel que pode ser mutavel
    //document.get... parta pegar o elemento do meu html que está entre ()
    // .value eu específico extamnete que quero pegar o valor do elemento.
    // parseInt - garantir que o valor passado navariavel ser´aum interio.
    alert("Entrei")
    let c = parseInt(document.getElementById('n01').value);
    const fatorMulti = 1.8;
    const fator = 32;
    let f = (c*fatorMulti) + fator;
    alert("A conversão é:" + f + "Fahrenheit");

   
    
    

}
    
