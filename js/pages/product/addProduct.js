function saveProduct () {
  event.preventDefault();

  let newProduct = {
    name: document.getElementById('product_name').value,
    value: document.getElementById('product_value').value,
    ean: document.getElementById('product_ean').value,
    cod: document.getElementById('product_cod').value,
    lot: document.getElementById('product_lot').value,
    validity: document.getElementById('product_validity').value,
    quantity: document.getElementById('product_quantity').value,
    description: document.getElementById('product_description').value,
    image: document.getElementById('product_image').value,
    category: document.getElementById('product_category').value,

  };

  let url = 'https://supermercado-front-08-default-rtdb.firebaseio.com/products.json';

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newProduct),
  });

  alert('Novo produto cadastrado');
}

function pageAddProduct() {
  return `
  <h1>Novo Produto</h1>

  <form onsubmit="saveProduct()" method="post" action="">

    <label for="product_name">Nome</label>
    <input class="form-control mb-3" id="product_name" type="text" required placeholder="Ex:Nome do produto">

    <label for="product_image">Imagem</label>
    <input class="form-control mb-3" id="product_image" type="text" required>

    <label for="product_value">Valor</label>
    <input class="form-control mb-3" id="product_value" required placeholder="R$">

    <label for="product_ean">Código de barras</label>
    <input class="form-control mb-3" id="product_ean" required placeholder="Digite aqui">

    <label for="product_cod">Código Interno</label>
    <input class="form-control mb-3" id="product_cod" required placeholder="Digite aqui">

    <label for="product_lot">Lote</label>
    <input class="form-control mb-3" id="product_lot" required placeholder="Digite aqui">

    <label for="product_validity">Validade</label>
    <input class="form-control mb-3" id="product_validity" required placeholder="Digite aqui">

    <label for="product_quantity">Quantidade</label>
    <input class="form-control mb-3" id="product_quantity" required placeholder="Digite aqui">

    <label for="product_description">Descrição</label>
    <textarea class="form-control mb-3" id="product_description" required placeholder="Digite aqui"></textarea>

    <label for="product_category">Categoria</label>
    <input class="form-control mb-3" id="product_name" type="text" required placeholder="Ex:Nome da categoria">

    <button class="btn btn-primary">CADASTRAR</button>

  </form>
  `;
}
