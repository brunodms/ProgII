function multiplicacaoPorAdicoes(operando1, operando2) {
    let resultado = 0;
    // Faz um loop que adiciona o operando 1 ao resultado um numero de vezes igual ao operador 2
    for (let i = 0; i < operando2; i++) {
        resultado += operando1;
    }
    return resultado;
}

function main() {
    // Teste da função
    let operando1 = parseInt(prompt("Digite o primeiro operando:"));
    let operando2 = parseInt(prompt("Digite o segundo operando:"));
    let resultado = multiplicacaoPorAdicoes(operando1, operando2);
    console.log("O resultado da multiplicação é:", resultado);
}
main();