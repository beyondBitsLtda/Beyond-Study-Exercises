function sortear(){
    // let declarando variavel que pode ser mutavel
    //document.get... parta pegar o elemento do meu html que está entre ()
    // .value eu específico extamnete que quero pegar o valor do elemento.
    let quantidade = document.getElementsById('quantidade').value;
    let de = document.getElementsById('de').value;
    let ate = document.getElementsById('ate').value;
// concatenando strings com variaveis:
alert(`Quantidades: ${quantidade}`);
alert(`De: ${de}`);
alert(`Até: ${ate}`);

    
}