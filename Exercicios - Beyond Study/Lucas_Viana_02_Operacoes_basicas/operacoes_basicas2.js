function adicao(a,b){
    return a + b;
}
function subtracao(a,b){
    return a - b;
}
function multiplicacao(a,b){
    return a * b;
}
function divisao(a,b){
    if(b !==0){
        return a / b;
    } else{
        return "Erro:Divisão por zero.";
    }
}

function Calculadora(operacao, a, b){
    switch(operacao){
        case "soma":
            return adicao(a, b);
        case "subtracao":
            return subtracao(a, b);
        case "multiplicacao":
            return multiplicacao(a,b);
        case "divisao":
            return divisao(a,b);
        default:
            return "Operação Inválida"    
    }
}

//Exemplo de Uso

let resultado = Calculadora("soma", 5,  3);
console.log(resultado);