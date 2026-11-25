document.addEventListener("DOMContentLoaded", () => {
    const campoDataHora = document.querySelector("#dataHoraEnvio");
    if (campoDataHora) {
        campoDataHora.value = new Date().toLocaleString("pt-PT", {
            dateStyle: "short",
            timeStyle: "medium"
        });
    }

    const linksAbrir = document.querySelectorAll(".abrir-modal");
    linksAbrir.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const modalId = link.getAttribute("data-modal");
            const dialog = document.getElementById(modalId);
            if (dialog && typeof dialog.showModal === "function") {
                dialog.showModal();
            }
        });
    });

    const botoesFechar = document.querySelectorAll(".fechar-modal");
    botoesFechar.forEach((botao) => {
        botao.addEventListener("click", () => {
            const dialog = botao.closest("dialog");
            if (dialog) {
                dialog.close();
            }
        });
    });

    const modais = document.querySelectorAll("dialog.modal-nivel");
    modais.forEach((dialog) => {
        dialog.addEventListener("click", (event) => {
            const retangulo = dialog.getBoundingClientRect();
            const clicouFora =
                event.clientX < retangulo.left ||
                event.clientX > retangulo.right ||
                event.clientY < retangulo.top ||
                event.clientY > retangulo.bottom;

            if (clicouFora) {
                dialog.close();
            }
        });
    });
});