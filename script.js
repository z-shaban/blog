const newPostButton = document.querySelector("#newPostButton");
const overlay = document.querySelector(".overlay");
const newPostModal = document.querySelector(".new-post-modal");
const newPostCloseButton = document.querySelector(".new-post-close-button");
const submitButton = document.querySelector(".submitButton");

function openModal(){
    newPostModal.style.display = "block";
    overlay.style.display = "block";
}

function closeModal(){
    newPostModal.style.display = "none";
    overlay.style.display = "none";
}

newPostButton.addEventListener("click", openModal);
newPostCloseButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);