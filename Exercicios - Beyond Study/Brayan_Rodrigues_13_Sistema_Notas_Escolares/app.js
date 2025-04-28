function media (){

    let somaDasNotas;
    let nota01 = parseInt(document.getElementById('n01').value);
    alert(nota01);
    let nota02 = parseInt(document.getElementById('n02').value);
    alert(nota02);
    let nota03 = parseInt(document.getElementById('n03').value);
    alert(nota03);

    if (nota01 > 33 || nota01 < 0) {
        alert("Insira uma nota entre 0 e 33");
        return;
    } 

    if (nota02 > 33 || nota02 < 0) {
        alert("Insira uma nota entre 0 e 33");
    } 

    if (nota03 > 33 || nota03 < 0) {
        alert("Insira uma nota entre 0 e 33");
    } 

    somaDasNotas = nota01 + nota02 + nota03;
  
    alert(somaDasNotas);

    if (somaDasNotas >= 60) {
        alert("Passei");
    } else {
        alert("Lucas");
    }

    }
    
 

