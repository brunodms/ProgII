const somaAteValor = (valor) => {
    let soma = 0;
    for (let i = 1; i <= valor; i++) {
        soma += i;
    }
    return soma;
}

function main() {
    // Teste da função
    let valor = parseInt(prompt("Digite o valor:"));
    let resultado = somaAteValor(valor);
    console.log("A soma de todos os números de 1 até", valor ,"é:", resultado);
}
main();