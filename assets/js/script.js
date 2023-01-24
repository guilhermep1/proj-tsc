const modal = document.querySelector(".modal");
const botaoAbrirModal = document.querySelector(".botao-video");
const botaoFecharModal = document.querySelector(".botao-fechar");
const modalContainer = document.querySelector(".modal-container");
const video = document.getElementById("popup-video");

function fecharModal() {
    modal.classList.remove("aberto");
    video.setAttribute("src", " ");
}

botaoAbrirModal.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", "https://www.youtube.com/embed/4tXjqIXB_eU")
});

botaoFecharModal.addEventListener("click", fecharModal);
modalContainer.addEventListener("click", fecharModal);
