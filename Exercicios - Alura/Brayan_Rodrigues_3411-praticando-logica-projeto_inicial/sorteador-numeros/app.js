function sortear(){
    // let declarando variavel que pode ser mutavel
    //document.get... parta pegar o elemento do meu html que está entre ()
    // .value eu específico extamnete que quero pegar o valor do elemento.
    // parseInt - garantir que o valor passado navariavel ser´aum interio.
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let num = oberterNumeroAleatorio(de,ate);
    alert(num);

    
}

function obterNumeroSorteado(min,max){

}