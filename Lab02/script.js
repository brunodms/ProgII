function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
    // substituir a imagem
    // se tiver light mode, adicionar a imagem light
    // se tiver sem light mode, manter a imagem normal
    if (html.classList.contains("light")) {
      img.setAttribute("src", "assets/avatar.png")
    } else {
      img.setAttribute("src", "assets/avatar.png")
    }
}
let descricao_curso_cc  = document.getElementById('curso_cc');
let descricao_curso_historia = document.getElementById('curso_historia');
let descricao_curso_filosofia = document.getElementById('curso_filosofia');
let descricao_curso_geografia = document.getElementById('curso_geografia');

function toggleCC() {
    descricao_curso_cc.style.removeProperty('display');
    descricao_curso_historia.style.display = 'none';
    descricao_curso_filosofia.style.display = 'none';
    descricao_curso_geografia.style.display = 'none';
}
function toggleHistoria() {
    descricao_curso_historia.style.removeProperty('display');
    descricao_curso_cc.style.display = 'none';
    descricao_curso_filosofia.style.display = 'none';
    descricao_curso_geografia.style.display = 'none';
}
function toggleFilosofia() {
    descricao_curso_filosofia.style.removeProperty('display');
    descricao_curso_historia.style.display = 'none';
    descricao_curso_cc.style.display = 'none';
    descricao_curso_geografia.style.display = 'none';
}
function toggleGeografia() {
    descricao_curso_geografia.style.removeProperty('display');
    descricao_curso_historia.style.display = 'none';
    descricao_curso_cc.style.display = 'none';
    descricao_curso_filosofia.style.display = 'none';
}