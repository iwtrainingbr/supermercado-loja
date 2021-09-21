function pageAddProduct() {
  return `
  <h1>Novo Produto</h1>

  <form>

    <label for="product_name">Nome</label>
    <input class="form-control mb-3" id="product_name" placeholder="Digite aqui">

    <label for="product_price">Valor</label>
    <input class="form-control mb-3" id="product_price" placeholder="R$">

    <label for="product_ean">Código de barras</label>
    <input class="form-control mb-3" id="product_ean" placeholder="Digite aqui">

    <label for="product_cod">Código Interno</label>
    <input class="form-control mb-3" id="product_cod" placeholder="Digite aqui">

    <label for="product_lote">Lote</label>
    <input class="form-control mb-3" id="product_lote" placeholder="Digite aqui">

    <label for="product_validity">Validade</label>
    <input class="form-control mb-3" id="product_validity" placeholder="Digite aqui">

    <label for="product_stock">Quantidade</label>
    <input class="form-control mb-3" id="product_stock" placeholder="Digite aqui">

    <label for="product_description">Descrição</label>
    <textarea class="form-control mb-3" id="product_description" placeholder="Digite aqui"></textarea>

    <button class="btn btn-primary">CADASTRAR</button>

  </form>
  `;
}
