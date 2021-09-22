function pageListCategories() {
  let data = [0, 1, 2, 3, 4, 5].map(cat => {
      return `
        <tr>
          <td>Teste ${cat}</td>
          <td>Teste</td>
          <td>
            <a href="http://minaspetro.com.br/blog/wp-content/uploads/2019/12/original-3fac0b90b8781220623bed8c8225bb65-591x400.jpg" data-lightbox="image-1" data-title="Teste ${cat}">
              <img src="http://minaspetro.com.br/blog/wp-content/uploads/2019/12/original-3fac0b90b8781220623bed8c8225bb65-591x400.jpg" width="60" height="40">
            </a>
          <td>Teste</td>
          <td>
            <button class="btn btn-warning btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm">Excluir</button>
          </td>
        </tr>
      `;
  }).join('');

  return `
    <h1>Gerenciar Categorias</h1>

    <table class="table table-hover table-striped">
      <thead class="table-dark">
        <tr>
          <th>Nome</th>
          <th>Referência</th>
          <th>Foto</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        ${data}
      </tbody>
    </table>
  `;
}
