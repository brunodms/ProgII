// Função para calcular o preço final
const calcularPrecoFinal = (precoProduto, formaPagamento) => {
    let precoFinal;

    if (formaPagamento === 1) {
        // À vista com desconto de 5%
        precoFinal = precoProduto * 0.95;
    } else if (formaPagamento === 2) {
        // A prazo com acréscimo de 10%
        precoFinal = precoProduto * 1.10;
    } else {
        // Forma de pagamento inválida
        return "Forma de pagamento inválida";
    }

    return precoFinal;
}
function main() {
    // Solicita o preço do produto e a forma de pagamento
    let precoProduto = parseFloat(prompt("Preço do produto:"));
    let formaPagamento = parseFloat(prompt("Forma de pagamento:"));

    // Chama a função para o preço final
    let precoFinal = calcularPrecoFinal(precoProduto, formaPagamento);
    let forma = " ";
    if (formaPagamento === 1) {
        forma = "vista: "
    } else if (formaPagamento === 2) {
        forma = "prazo: "
    }
    // Imprime o resultado
    console.log("Preço do produto:", precoProduto.toFixed(2));
    console.log("Forma de pagamento:", formaPagamento);
    console.log("Preço a", forma, precoFinal.toFixed(2));
}

main();