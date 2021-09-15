function pageListClients() {
  let data = [0, 1, 2, 3, 4, 5].map(cat => {
      return `
        <tr>
          <td>Teste ${cat}</td>
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
    <h1>Gerenciar Categorias</h1>
    
    <table class="table table-hover table-striped" style="text-align: center;">
      <thead class="table-dark">
        <tr>
          <th>CPF</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Endereço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        ${data}
      </tbody>
    </table>
  `;
}
