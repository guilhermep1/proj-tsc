// Defining DOM elements
// const modal = document.querySelector('.modal');
// const openModalButton = document.querySelector('.botao-video');
// const closeModalButton = document.querySelector('.botao-fechar');
// const modalContainer = document.querySelector('.modal-container');
// const video = document.getElementById('popup-video');
const mobileButton = document.getElementById("btn-mobile");
const navigation = document.getElementById("nav");
const mainContent = document.querySelector("main");

// Functions
// function toggleModal() {
//     modal.classList.toggle('aberto');
//     video.setAttribute('src', 'https://www.youtube.com/embed/K4TOrB7at0Y');
// }

function toggleNavigation() {
  navigation.classList.toggle("active");
}

function closeNavigationIfActive() {
  if (navigation.classList.contains("active")) {
    toggleNavigation();
  }
}

// function closeModalAndResetVideo() {
//     modal.classList.remove('aberto');
//     video.setAttribute('src', ' ');
// }

// Event listeners
// openModalButton.addEventListener('click', toggleModal);
// closeModalButton.addEventListener('click', toggleModal);
mobileButton.addEventListener("click", toggleNavigation);
mainContent.addEventListener("click", closeNavigationIfActive);
// modalContainer.addEventListener('click', closeModalAndResetVideo);

//Current Page Script
const currentUrl = window.location.href;
const navbarLinks = document.querySelectorAll("#nav a");

for (const link of navbarLinks) {
  if (link.href == currentUrl) {
    link.style.fontWeight = "bold";
  }
}
