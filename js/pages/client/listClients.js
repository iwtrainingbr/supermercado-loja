(document).ready( function () {
    ('table-clients').DataTable();
} );

function pageListClients() {
  let url = 'https://supermercado-front-08-default-rtdb.firebaseio.com/clients.json';

  fetch(url)
    .then(response => response.json())
    .then(clients => {
      const TABLE_CLIENTS = document.getElementById('table-clients');

      for (let id in clients) {
      TABLE_CLIENTS.innerHTML += `
        <tr>
          <td>${clients[id].cpf}</td>
          <td>${clients[id].name}</td>
          <td>${clients[id].phone}</td>
          <td>${clients[id].address}</td>

          <td>
            <button class="btn btn-warning btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm">Excluir</button>
          </td>
        </tr>
      `;
    }
  });

  return `
    <h1>Gerenciar Clientes</h1>

    <table class="table table-hover table-striped" style="text-align: center;" id="table-clients">
      <thead class="table-dark">
        <tr>
          <th>CPF</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Endereço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody id="table-clients">
      </tbody>
    </table>
  `;
}
