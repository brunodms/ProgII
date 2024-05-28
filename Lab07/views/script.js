$(document).ready(function() {
    // Função para alternar o modo light/dark
    $("#switch").click(function() {
        $("html").toggleClass("light");
        const img = $("#profile img");
        const src = $("html").hasClass("light") ? "assets/avatar_light.png" : "assets/avatar.png";
        img.attr("src", src);
    });

    // Funções para alternar entre os cursos
    $(".button-cursos").click(function() {
        const target = $(this).data("target");
        $(".container").removeClass('d-block').addClass('d-none');
        $(target).removeClass('d-none').addClass('d-block');
    });
});