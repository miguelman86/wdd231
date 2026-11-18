const tempAtual = document.querySelector('#temp-atual');
const iconeDoClima = document.querySelector('#icone-do-clima');
const descrDaLegenda = document.querySelector('figcaption');

const mLat = "49.75160689695698";
const mLong = "6.406371885546224";
const mLang ="pt_br"
const mChave = "d9bcd59741e44db78acd722d4e046f84";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${mLat}&lon=${mLong}&appid=${mChave}&units=metric&lang=${mLang}`;

async function apiFetch() {
    try {
        const resposta = await fetch(url);
        if (resposta.ok) {
            const dados = await resposta.json();
            console.log(dados);
            mostrarResultados(dados);
        }
        else {
            throw Error(await resposta.text());
        }

    }
    catch (erro) {
        console.log(erro);
    }   
}

function mostrarResultados(dados) {
    tempAtual.innerHTML = `${dados.main.temp}&deg;C`;
    const iconesrc = `https://openweathermap.org/img/w/${dados.weather[0].icon}.png`;
    let descr = dados.weather[0].description;
    iconeDoClima.setAttribute('src', iconesrc);
    iconeDoClima.setAttribute('alt', dados.weather[0].description);
    descrDaLegenda.textContent = `${descr}`;
}

apiFetch();