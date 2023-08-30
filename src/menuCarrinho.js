function abrirCarrinho () {
    const abrir = document.getElementById('carrinho');
    abrir.classList.remove('right-[-360px]');
    abrir.classList.add('right-[0px]');
}

function fecharCarrinho () {
    const fechar = document.getElementById('carrinho');
    fechar.classList.remove('right-[0px]');
    fechar.classList.add('right-[-360px]');
}

// Escuta o evento 'click' dos botões e assim que o evento for realizado as funções serão executadas.
// Exporta a função para utilização no arquivo .js central (main.js).
export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById('fechar-carrinho');
    const botaoAbrirCarrinho = document.getElementById('abrir-carrinho');

    botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
    botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);
}