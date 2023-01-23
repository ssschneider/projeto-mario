const btnOpenModal = document.getElementById("btn-trailer")
const btnCloseModal = document.getElementById("btn-close-modal")
const modal = document.getElementById("modal")

const modalToggle = () => {
    modal.classList.toggle("aberto")
}

btnOpenModal.addEventListener("click", modalToggle)

btnCloseModal.addEventListener("click", modalToggle)