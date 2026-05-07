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
const form = document.getElementById('form-cadastro')

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault()

        const nome = document.getElementById('nome').value.trim()
        const email = document.getElementById('email').value.trim()
        const senha = document.getElementById('senha').value
        const confirmar = document.getElementById('confirmar').value
        const mensagem = document.getElementById('mensagem-erro')

        if (nome === '') {
            mensagem.textContent = 'Preencha o nome completo.'
            return
        }
        if (email === '') {
            mensagem.textContent = 'Preencha o e-mail.'
            return
        }
        if (senha.length < 6) {
            mensagem.textContent = 'A senha deve ter pelo menos 6 caracteres.'
            return
        }
        if (senha !== confirmar) {
            mensagem.textContent = 'As senhas não coincidem.'
            return
        }

        mensagem.textContent = ''
        alert('Conta criada com sucesso! Bem-vindo(a), ' + nome + '!')
    })
}