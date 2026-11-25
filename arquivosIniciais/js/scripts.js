const btnAbrir1 = document.getElementById('btnAbrir1');
const btnAbrir2 = document.getElementById('btnAbrir2');
const btnAbrir3 = document.getElementById('btnAbrir3');
const caixaDialogo = document.getElementById('caixaDialogo');
const btnFechar = document.getElementById('btnFechar');
const caixaDialogoTexto = document.getElementById('caixaDialogo div');


btnAbrir1.addEventListener("click", () => {
    caixaDialogo.showModal();
    caixaDialogoTexto.innerHTML = `Uma maça contem 95 calorias`;
})

btnAbrir2.addEventListener("click", () => {
    caixaDialogo.showModal();
    caixaDialogoTexto.innerHTML = `Uma laranja contem 45 calorias`;
})

btnAbrir3.addEventListener("click", () => {
    caixaDialogo.showModal();
    caixaDialogoTexto.innerHTML = `Uma Banana contem 105 calorias`;
})

btnFechar.addEventListener('click', () => {
    caixaDialogo.close();
})
