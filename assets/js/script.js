const modal = document.querySelector(".modal");
const botaoAbrirModal = document.querySelector(".botao-video");
const botaoFecharModal = document.querySelector(".botao-fechar");
const modalContainer = document.querySelector(".modal-container");
const video = document.getElementById("popup-video");

function alternarModal() {
    modal.classList.toggle("aberto");
    video.setAttribute("src", "https://www.youtube.com/embed/K4TOrB7at0Y");
}

botaoAbrirModal.addEventListener("click", alternarModal);
botaoFecharModal.addEventListener("click", alternarModal);

modalContainer.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", " ");
});
