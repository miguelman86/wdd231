import { url } from "../data/templos.js";
// console.log(url)
import { templos } from "../data/templos.js";
console.log(templos)

const mostrarAqui = document.querySelector('#mostrarAqui');
const dialogo = document.querySelector('#meuDialogo');
const titulo = document.querySelector('#meuDialogo h2');
const fechar = document.querySelector('#meuDialogo button');
const info = document.querySelector('#meuDialogo p');

fechar.addEventListener("click", () =>
    dialogo.close()
)

function exibirItens(dados) {

    dados.forEach(x => {
        console.log(x)

        const foto = document.createElement('img')
        foto.src=`${url}${x.caminho}`
        foto.alt = x.nome
        foto.addEventListener('click', () => (exibirInfo(x)))
        mostrarAqui.appendChild(foto)
    })

}

function exibirInfo(x) {
    titulo.innerHTML = x.nome
    info.innerHTML = `Dedicado ${x.dedicado} por ${x.pessoa} como templo numero ${x.numero}`
    dialogo.showModal();
}

exibirItens(templos);
