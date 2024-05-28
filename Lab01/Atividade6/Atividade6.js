function calcularPercentualEntre(...numeros) {
    // Variáveis para contar o total de números e quantos estão entre 10 e 20
    let totalNumeros = 0;
    let numerosEntre = 0;

    // Loop sobre cada número fornecido
    for (let numero of numeros) {
        // Se o número for menor ou igual a zero, não faz parte da contagem
        if (numero <= 0) {
            // Se encontrarmos um número menor ou igual a zero, paramos de contar
            break;
        }
        // Incrementa o contador de números totais
        totalNumeros++;

        // Verifica se o número está entre 10 e 20
        if (numero >= 10 && numero <= 20) {
            // Se estiver entre 10 e 20, incrementa o contador de números entre 10 e 20
            numerosEntre++;
        }
    }

    // Se nenhum número válido foi fornecido, retorna uma mensagem indicando isso
    if (totalNumeros === 0) {
        return "Nenhum número válido foi fornecido.";
    }

    // Calcula o percentual de números entre 10 e 20
    let percentual = (numerosEntre / totalNumeros) * 100;
    // Retorna o percentual formatado com duas casas decimais
    return percentual.toFixed(2) + "%";
}

function main() {
    // Teste da função
    let numeros = [];
    let numero;
    do {
        numero = parseInt(prompt("Digite um número (um número menor ou igual a 0 finaliza a sequência):"));
        if (!isNaN(numero)) {
            numeros.push(numero);
            console.log(numero);
        }
    } while (numero > 0);
    
    let resultado = calcularPercentualEntre(...numeros);
    console.log("% entre 10 e 20:", resultado);
    
}
main();