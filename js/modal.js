document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.getElementById("contact-btn");
    const modal = document.getElementById("contactModal");
    const closeModal = document.querySelector(".close-modal");

    // Abrir modal
    contactBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });

    // Fechar modal ao clicar no X
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fechar ao clicar fora do modal
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
