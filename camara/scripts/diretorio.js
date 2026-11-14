const membros = document.querySelector("#membros");

const grade = document.querySelector("#grade")
grade.addEventListener("click", () => {
    membros.classList.add("grade");
    membros.classList.remove("lista");
    grade.classList.add("ativo");
    lista.classList.remove("ativo");
    grade.setAttribute("aria-pressed", "true");
    lista.setAttribute("aria-pressed", "false");
});

const lista = document.querySelector("#lista")
lista.addEventListener("click", () => {
    membros.classList.add("lista");
    membros.classList.remove("grade");
    lista.classList.add("ativo");
    grade.classList.remove("ativo");
    lista.setAttribute("aria-pressed", "true");
    grade.setAttribute("aria-pressed", "false");
});

async function load() {
    const resposta = await fetch("dados/membros.json");
    const dados = await resposta.json();
    membros.innerHTML = dados.map(empresa => `
        <section class="cartao">
            <img src="imagens/${empresa.imagem}" alt="Logo ${empresa.nome}" loading="lazy">
            <h3 class="nome">${empresa.nome}</h3>
            <p><span class="badge">${empresa.nivel === 1 ? "Membro" : empresa.nivel === 2 ? "Prata" : "Ouro"} - ${empresa.categoria}</span></p>
            <p class="endereco">${empresa.endereco}</p>
            <p class="telefone">${empresa.telefone}</p>
            <p class="descricao">${empresa.descricao}</p>
            <a class="site" href="${empresa.website}" target="_blank">${empresa.website}</a>
        </section>
    `).join("");
}
load();