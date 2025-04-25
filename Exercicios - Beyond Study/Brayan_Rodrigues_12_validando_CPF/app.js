function validar (){
    // let declarando variavel que pode ser mutavel
    //document.get... parta pegar o elemento do meu html que está entre ()
    // .value eu específico extamnete que quero pegar o valor do elemento.
    // parseInt - garantir que o valor passado navariavel ser´aum interio.
    alert("Entrei")
    let cpf = parseInt(document.getElementById('n01').value);
    let diviCPF = 1;
    alert(diviCPF);
    let d1 = cpf / 10;
    alert(d1);
    let d2 = d1 /  10;
    alert(d2);
    let d3 = d2 /  10;
    alert(d3);
    let d4 = d3 /  10;
    alert(d4);
    let d5 = d4 /  10;  
    alert(d5);
    let d6 = d5 / 10;
    alert(d6);
    let d7 = d6 / 10;
    alert(d7);
    let d8 = d7 /10;
    alert(d8);
    let d9 = d8 / 10;
    alert(d9);
    let d10 = d9 / 10;
    alert(d10);
    let d11 = d10 / 10;
    alert(d11);

    let resulatdo = parseInt(d11);

    alert(resulatdo);
     
    if (resulatdo != 0) {
        alert("CPF INVALIDO");
    } else {
        alert("CPF VALIDO");
    }
   
}
    
