function pageListProducts() {
  let data = [0, 1, 2, 3, 4, 5,6,7,8,9].map(prod => {
      return `
        <tr>
          <td>Teste ${prod}</td>
          <td>Teste</td>
          <td>Teste</td>
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
