const modal = document.getElementById("raptok-modal");
const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
