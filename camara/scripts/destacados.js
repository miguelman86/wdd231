async function carregarDestaques() {
  try {
    const response = await fetch('membros.json');
    const membros = await response.json();

    // 1. Filtrar membros de nível Ouro (3) ou Prata (2)
    const elegiveis = membros.filter(m => m.nivel === 2 || m.nivel === 3);

    // 2. Embaralhar aleatoriamente (Fisher-Yates shuffle)
    const embaralhados = elegiveis.sort(() => 0.5 - Math.random());

    // 3. Selecionar 3 (ou 2) membros
    const selecionados = embaralhados.slice(0, 3);

    // 4. Mapear o nível para texto amigável
    const getNivelNome = (nivel) => nivel === 3 ? 'Ouro' : 'Prata';

    // 5. Renderizar no HTML
    const container = document.getElementById('destaques-container');
    container.innerHTML = selecionados.map(m => `
      <div class="card-destaque nivel-${m.nivel}">
        <img src="${m.imagem}" alt="Logotipo ${m.nome}" class="logo-empresa" />
        <h3>${m.nome}</h3>
        <span class="badge">Nível: ${getNivelNome(m.nivel)}</span>
        <p class="descricao">${m.descricao}</p>
        <p class="endereco">📍 ${m.endereco}</p>
        <p class="telefone">📞 ${m.telefone}</p>
        <a href="${m.website}" target="_blank" class="site-link">Visitar Website</a>
      </div>
    `).join('');

  } catch (error) {
    console.error('Erro ao carregar os destaques:', error);
  }
}

document.addEventListener('DOMContentLoaded', carregarDestaques);