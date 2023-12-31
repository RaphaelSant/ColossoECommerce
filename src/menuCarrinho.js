import { catalogo } from "./utilidades";

function abrirCarrinho() {
    const abrir = document.getElementById('carrinho');
    abrir.classList.remove('right-[-360px]');
    abrir.classList.add('right-[0px]');
}

function fecharCarrinho() {
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

export function adicionarAoCarrinho(idProduto) {
    const produto = catalogo.find((p) => p.id == idProduto);
    const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
    const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg p-1 relative">
    <button id="fechar-carrinho" class="absolute top-0 right-2">
      <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
    </button>
    <img src="./assets/img/${produto.imagem}" alt="${produto.imagem}" class="h-24 rounded-lg">
    <div class="py-2">
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-900 text-lg">R$ ${produto.preco}</p>
    </div>
  </article>`;
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}