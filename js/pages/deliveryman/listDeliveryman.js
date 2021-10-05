function pageListDeliveryman() {
  let url = 'https://supermercado-front-08-default-rtdb.firebaseio.com/deliveryman.json';

  fetch(url)
    .then(response => response.json())
    .then(deliveryman => {
      const TABLE_DELIVERYMAN = document.getElementById('table-deliveryman');

      for (let id in deliveryman) {
      TABLE_DELIVERYMAN.innerHTML += `
        <tr>
          <td>${deliveryman[id].name}</td>
          <td>${deliveryman[id].phone}</td>
          <td>${deliveryman[id].vehicle}</td>

          <td>
            <button class="btn btn-warning btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm">Excluir</button>
          </td>
        </tr>
      `;
    }
  });

  return `
    <h1>Gerenciar Entregadores</h1>

    <table class="table table-hover table-striped" style="text-align: center;">
      <thead class="table-dark">
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Veículo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody id="table-deliveryman">
      </tbody>
    </table>
  `;
}
