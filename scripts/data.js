document.addEventListener("DOMContentLoaded", () => {
    const hoje = new Date()

    const ano = document.querySelector("#anoatual");
    ano.innerHTML = `${hoje.getFullYear()}`;

    const agora = document.querySelector("#ultimaModificacao");
    agora.innerHTML = `Ultima modificação: ${document.lastModified}`;
})
