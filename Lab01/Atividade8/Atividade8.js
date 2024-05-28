function main() {
    // Teste da função
    let numerosPositivos = 0;
    let numerosNegativos = 0;

    // Loop para solicitar e contar os números
    for (let i = 1; i <= 4; i++) {
        let numero = parseInt(prompt("N" + i + ":"));
        if (numero >= 0) {
            numerosPositivos++;
        } else {
            numerosNegativos++;
        }
        console.log("N" + i + ": " + numero);
    }
    // Imprime o resultado
    console.log(numerosPositivos, "(+) e", numerosNegativos, "(-)");
}
main();