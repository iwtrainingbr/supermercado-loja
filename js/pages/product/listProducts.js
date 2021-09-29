function pageListProducts() {
  let url = 'https://supermercado-front-08-default-rtdb.firebaseio.com/products.json';

  fetch(url)
    .then(response => response.json())
    .then(products => {
      const TABLE_PRODUCTS = document.getElementById('table-products');
      for (let id in products){

        TABLE_PRODUCTS.innerHTML += `
        <tr>
          <td>
            <a href="${products[id].image}"  data-lightbox="image-1" data-title="img ${products[id].name}">
            <img src="${products[id].image}" width="60" height="40">
          </td>
          <td>${products[id].name}</td>
          <td>${products[id].category || "---"}</td>
          <td>${products[id].value}</td>
          <td>${products[id].quantity}</td>
          <td>${products[id].validity}</td>
          <td>
            <button class="btn btn-warning btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm">Excluir</button>
          </td>

        </tr>
        `
      }
    })


  return `
    <h1>Gerenciar Produtos</h1>
    <table class="table table-hover table-striped">
      <thead class="table-dark">
        <tr>
          <th>Foto</th>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Valor</th>
          <th>Quantidade</th>
          <th>Validade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody id="table-products">
      </tbody>
    </table>
  `;
}
