document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const destino = document.querySelector("#resumo-dados");

    if (!destino) return;

    const campos = [
        { rotulo: "Nome", chave: "nome" },
        { rotulo: "Sobrenome", chave: "sobrenome" },
        { rotulo: "Endereço de e-mail", chave: "email" },
        { rotulo: "Número de celular", chave: "celular" },
        { rotulo: "Nome da empresa/organização", chave: "empresa" },
        { rotulo: "Data e hora do carregamento", chave: "dataHoraEnvio" }
    ];

    const lista = document.createElement("ul");

    campos.forEach(({ rotulo, chave }) => {
        const item = document.createElement("li");
        const valor = params.get(chave) || "Não informado";
        item.innerHTML = `<strong>${rotulo}:</strong> ${valor}`;
        lista.appendChild(item);
    });

    destino.appendChild(lista);
});