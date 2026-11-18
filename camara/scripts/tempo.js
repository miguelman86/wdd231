// Coordenadas de Osasco, SP, Brasil
const lat = -23.5329;
const lon = -46.7916;
const apiKey = "d9bcd59741e44db78acd722d4e046f84";

const urlAtual = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;
const urlPrevisao = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;

function horaFormatada(timestamp) {
    return new Date(timestamp * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

async function buscarTempo() {
    const divTempoAtual = document.getElementById('tempo-atual');
    const divPrevisao = document.getElementById('previsao');

    if (!divTempoAtual || !divPrevisao) return;

    try {
        // 1. Clima Atual - como no wireframe: temp, descrição, máxima, mínima, umidade, nascer e pôr do sol
        const respostaAtual = await fetch(urlAtual);
        if (!respostaAtual.ok) throw new Error('Erro ao buscar clima atual');
        const dadosAtual = await respostaAtual.json();

        const tempAtual = Math.round(dadosAtual.main.temp);
        const tempMax = Math.round(dadosAtual.main.temp_max);
        const tempMin = Math.round(dadosAtual.main.temp_min);
        const umidade = dadosAtual.main.humidity;
        const descAtual = dadosAtual.weather[0].description;
        const iconeAtual = dadosAtual.weather[0].icon;
        const iconeUrl = `https://openweathermap.org/img/wn/${iconeAtual}@2x.png`;
        const nascerSol = horaFormatada(dadosAtual.sys.sunrise);
        const porSol = horaFormatada(dadosAtual.sys.sunset);

        divTempoAtual.innerHTML = `
            <div class="tempo-item-atual">
                <img src="${iconeUrl}" alt="${descAtual}" width="80" height="80">
                <div>
                    <p class="temperatura">${tempAtual}°C</p>
                    <p class="descricao">${descAtual}</p>
                </div>
            </div>
            <ul class="clima-detalhes">
                <li>Máxima: ${tempMax}°C</li>
                <li>Mínima: ${tempMin}°C</li>
                <li>Umidade: ${umidade}%</li>
                <li>Nascer do Sol: ${nascerSol}</li>
                <li>Pôr do Sol: ${porSol}</li>
            </ul>
        `;

        // 2. Previsão - como no wireframe: "Hoje: 32°C", "Quarta-Feira: 31°C"...
        const respostaPrevisao = await fetch(urlPrevisao);
        if (!respostaPrevisao.ok) throw new Error('Erro ao buscar previsão');
        const dadosPrevisao = await respostaPrevisao.json();

        const diasPrevisao = dadosPrevisao.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

        divPrevisao.innerHTML = '';
        diasPrevisao.forEach((dia, indice) => {
            const data = new Date(dia.dt * 1000);
            const nomeDia = indice === 0 ? 'Hoje' : data.toLocaleDateString('pt-BR', { weekday: 'long' });
            const tempDia = Math.round(dia.main.temp_max);
            divPrevisao.innerHTML += `
                <p class="linha-previsao"><span>${nomeDia}:</span> <strong>${tempDia}°C</strong></p>
            `;
        });

    } catch (error) {
        console.error("Erro no carregamento do clima:", error);
        divTempoAtual.innerHTML = `<p>Não foi possível carregar os dados meteorológicos no momento.</p>`;
    }
}

document.addEventListener('DOMContentLoaded', buscarTempo);
