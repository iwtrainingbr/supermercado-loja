function pageNewProducts() {
  return `
  <h1>Novo Produto</h1>

  <form>

    <label for="products_name">Nome</label>
    <input class="form-control mb-3" id="products_name" placeholder="Digite aqui">

    <label for="products_price">Valor</label>
    <input class="form-control mb-3" id="products_price" placeholder="R$">

    <label for="products_ean">Código de barras</label>
    <input class="form-control mb-3" id="products_ean" placeholder="Digite aqui">

    <label for="products_cod">Código Interno</label>
    <input class="form-control mb-3" id="products_cod" placeholder="Digite aqui">

    <label for="products_lote">Lote</label>
    <input class="form-control mb-3" id="products_lote" placeholder="Digite aqui">

    <label for="products_validity">Validade</label>
    <input class="form-control mb-3" id="products_validity" placeholder="Digite aqui">

    <label for="products_stock">Quantidade</label>
    <input class="form-control mb-3" id="products_stock" placeholder="Digite aqui">

    <label for="products_description">Descrição</label>
    <textarea class="form-control mb-3" id="products_description" placeholder="Digite aqui"></textarea>

    <button class="btn btn-primary">CADASTRAR</button>

  </form>
  `;
}
