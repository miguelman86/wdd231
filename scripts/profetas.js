const url = 'https://byui-cse.github.io/cse-ww-program-pt/data/profetas-dos-ultimos-dias.json';
const cartoes = document.querySelector('#cartoes');

async function obterDadosDeProfetas() {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    exibirProfetas(dados.profetas);
}

obterDadosDeProfetas();

const exibirProfetas = (profetas) => {
    profetas.forEach((profeta) => {
        const cartao = document.createElement('section');
        const nomeCompleto = document.createElement('h2');
        nomeCompleto.textContent = `${profeta.nome} ${profeta.sobrenome}`;

        // Tabela com 2 colunas: rótulo | valor
        const tabela = document.createElement('table');
        tabela.classList.add('info');
        const corpo = document.createElement('tbody');

        const campos = [
            ['Nascimento', profeta.nascimento],
            ['Lugar', profeta.localNascimento],
            ['Crianças', profeta.numeroFilhos],
            ['Anos de serviço', profeta.duracao],
            ['Falecimento', profeta.morte ?? '—'],
        ];

        campos.forEach(([rotulo, valor]) => {
            const linha = document.createElement('tr');

            const celulaRotulo = document.createElement('td');
            celulaRotulo.classList.add('rotulo');
            celulaRotulo.textContent = `${rotulo}:`;

            const celulaValor = document.createElement('td');
            celulaValor.classList.add('valor');
            celulaValor.textContent = valor;

            linha.append(celulaRotulo, celulaValor);
            corpo.appendChild(linha);
        });

        tabela.appendChild(corpo);

        const retrato = document.createElement('img');
        retrato.setAttribute('src', profeta.urlImagem);
        retrato.setAttribute('alt', `Retrato de ${profeta.nome} ${profeta.sobrenome}`);
        retrato.setAttribute('loading', 'lazy');
        retrato.setAttribute('width', '340');
        retrato.setAttribute('height', '440');

        cartao.append(nomeCompleto, tabela, retrato);
        cartoes.appendChild(cartao);
    });
};
