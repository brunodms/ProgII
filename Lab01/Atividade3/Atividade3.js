function calcularDuracaoEvento(horaInicio, horaFim) {
    // Verifica se o evento dura até o dia seguinte
    if (horaFim < horaInicio) {
        // Calcula a duração do evento até o final do dia
        let duracaoAteFimDoDia = 24 - horaInicio;
        // Soma a duração até o final do dia com o horario do fim do evento
        return duracaoAteFimDoDia + horaFim;
    } else if (horaInicio < horaFim) {
        // Se o evento não passar para o dia seguinte, a duração é a diferença entre a hora final e a hora de início do evento
        return horaFim - horaInicio;
    } else if (horaInicio === horaFim){
        return 24;
    }
}

function main() {
    // Solicita a hora de inicio e hora final do evento
    let horaInicio 
    /// Verifica se a hora de início é válida
    do{
        horaInicio = parseInt(prompt("Inicio:"));
        if (horaInicio > 23) {
            alert("Hora de início inválida. Por favor, insira um valor entre 0 e 23.");
        }
    } while (horaInicio > 23);

    let horaFim;
    /// Verifica se a hora final é válida
    do{
        horaFim = parseInt(prompt("Fim:"));
        if (horaFim > 23) {
            alert("Hora final inválida. Por favor, insira um valor entre 0 e 23.");
        }
    } while (horaFim > 23);

    // Chama a função para calcular a duração total do evento
    let duracao = calcularDuracaoEvento(horaInicio, horaFim);

    // Imprime o resultado
    console.log("Inicio:", horaInicio);
    console.log("Fim:", horaFim);
    console.log("Duração:", duracao, "horas");
}

main();