let totalItens = 0

function adicionarAoCarrinho(nomeProduto) {
    totalItens++
    document.getElementById('contador-carrinho').textContent = totalItens
    alert(nomeProduto + ' adicionado ao carrinho!')
}
function toggleMenu() {
    const menu = document.querySelector('nav ul')
    menu.classList.toggle('aberto')
}