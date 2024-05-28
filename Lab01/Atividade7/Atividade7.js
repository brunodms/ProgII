function fatorial(n) {
    // Caso base: fatorial de 0 ou 1 é 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Caso recursivo: fatorial de n é n multiplicado pelo fatorial de n - 1
        return n * fatorial(n - 1);
    }
}

function main() {
    // Teste da função
    let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
    let resultado = fatorial(numero);
    console.log("O fatorial de", numero, "é:", resultado);
}
main();