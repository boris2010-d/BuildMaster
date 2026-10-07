function showInfo(text) {
    const modal = document.getElementById("infoModal");
    const modalText = document.getElementById("modalText");

    modalText.textContent = text;

    modal.classList.add("active");
}


function closeModal() {
    document
        .getElementById("infoModal")
        .classList.remove("active");
}


window.addEventListener("click", function(event) {

    const modal = document.getElementById("infoModal");

    if (event.target === modal) {
        closeModal();
    }

});


document
    .getElementById("contactForm")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        const message = document.getElementById("message");

        message.textContent =
            "✓ Съобщението беше изпратено успешно!";

        this.reset();

    });