// Função para calcular o salário do funcionário
function calcularSalario(horasTrabalhadas, valorHora) {
    let salario = horasTrabalhadas * valorHora;

    // Verifica se o funcionário trabalhou mais de 200 horas
    if (horasTrabalhadas > 200) {
        // Acrescenta 5% ao salário
        salario *= 1.05;
    }

    return salario;
}

function main() {
    // Solicita as horas trabalhadas e o valor da hora
    let horasTrabalhadas = parseFloat(prompt("Horas trabalhadas:"));
    let valorHora = parseFloat(prompt("Valor da hora:"));

    // Chama a função para calcular o salário
    let salario = calcularSalario(horasTrabalhadas, valorHora);

    // Imprime o resultado
    console.log("Horas trabalhadas:", horasTrabalhadas.toFixed(2));
    console.log("Valor da hora:", valorHora.toFixed(2));
    console.log("Salário:", salario.toFixed(2));
}

main();