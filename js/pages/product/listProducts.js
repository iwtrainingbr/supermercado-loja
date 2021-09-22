function pageListProducts() {
  let data = [0, 1, 2, 3, 4, 5,6,7,8,9].map(prod => {
      return `
        <tr>
          <td>
            <a href="https://www.drogariaminasbrasil.com.br/media/product/a70/sabao-em-po-tixan-primavera-500g-050.jpg" data-lightbox="image-1" data-title="Teste ${prod}">
              <img src="https://www.drogariaminasbrasil.com.br/media/product/a70/sabao-em-po-tixan-primavera-500g-050.jpg" width="60" height="40">
            </a>
          </td>
          <td>Teste ${prod}</td>
          <td>teste</td>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
          <td>
            <button class="btn btn-warning btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm">Excluir</button>
          </td>
        </tr>
      `;
  }).join('');

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
      <tbody>
        ${data}
      </tbody>
    </table>

  `;
}
