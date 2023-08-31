import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades.js";

export function rederizarCatalogo() {
    for (let i = 0; i < catalogo.length; i++) {
        const cartaoProduto = `<div class="shadow-xl rounded-lg shadow-slate-400 border-solid w-48 m-2 flex flex-col justify-between p-2 group" id="card-produto-${catalogo[i].id}">
          <img 
          src="./assets/img/${catalogo[i].imagem}" 
          alt="Produto 1 do Colosso Megazine."
          class="group-hover:scale-110 duration-300 my-3 rounded-lg"
          />
          <p class="text-sm">${catalogo[i].marca}</p>
          <p class="text-sm">${catalogo[i].nome}</p>
          <p class="text-sm">R$ ${catalogo[i].preco}</p>
          <button id="adicionar-${catalogo[i].id}" class="bg-slate-950 text-slate-200 hover:bg-slate-600"><i class="fa-solid fa-cart-plus"></i></button>
          </div>`;
        document.getElementById("container-produto").innerHTML += cartaoProduto;
    }

    for (let i = 0; i < catalogo.length; i++) {
        document.getElementById(`adicionar-${catalogo[i].id}`).addEventListener("click", () => adicionarAoCarrinho(catalogo[i].id));

    }
}
