const modal = document.querySelector(".modal");
const botaoAbrirModal = document.querySelector(".botao-video");
const botaoFecharModal = document.querySelector(".botao-fechar");
const modalContainer = document.querySelector(".modal-container");
const video = document.getElementById("popup-video");
const btnMobile = document.getElementById("btn-mobile");

function alternarModal() {
    modal.classList.toggle("aberto");
    video.setAttribute("src", "https://www.youtube.com/embed/K4TOrB7at0Y");
}

function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

botaoAbrirModal.addEventListener("click", alternarModal);
botaoFecharModal.addEventListener("click", alternarModal);
btnMobile.addEventListener('click', toggleMenu);

modalContainer.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", " ");
});