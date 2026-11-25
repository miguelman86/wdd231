const modal = document.getElementById('meuModal');
const fecharModal = document.getElementById('fecharModal');
modal.showModal();

fecharModal.addEventListener('click', () => {
    modal.close();
});