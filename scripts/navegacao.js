const navbtn = document.querySelector("#ham-btn");
const barraNavegacao = document.querySelector('#barra-navegacao');

navbtn.addEventListener('click', () => {
    navbtn.classList.toggle('show');
    barraNavegacao.classList.toggle('show');
});