async function exibirDestaques() {
    const container = document.getElementById('destaques');
    if (!container) return;

    const resposta = await fetch('dados/membros.json');
    const membros = await resposta.json();

    const elegiveis = membros.filter(membro => membro.nivel >= 2);
    const sorteados = elegiveis.sort(() => Math.random() - 0.5).slice(0, 3);

    container.innerHTML = sorteados.map(membro => `
        <article class="cartao-destaque">
            <div class="destaque-topo">
                <h3>${membro.nome}</h3>
                <p>${membro.descricao}</p>
            </div>
            <div class="destaque-corpo">
                <img src="imagens/${membro.imagem}" alt="Logotipo de ${membro.nome}" width="90" height="90" loading="lazy">
                <div class="destaque-info">
                    <p><strong>TELEFONE:</strong> ${membro.telefone}</p>
                    <p><strong>ENDEREÇO:</strong> ${membro.endereco}</p>
                    <p><strong>SITE:</strong> <a href="${membro.website}" target="_blank">${membro.website.replace('https://www.', '')}</a></p>
                </div>
            </div>
            <p class="destaque-nivel">Nível ${membro.nivel === 3 ? 'Ouro' : 'Prata'}</p>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', exibirDestaques);
