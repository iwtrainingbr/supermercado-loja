function removeVehicle(id) {
  if ( false === confirm('Você tem certeza?') ) {
    return;
  }

  let url = `https://supermercado-front-08-default-rtdb.firebaseio.com/vehicles/${id}.json`;

  fetch(url, {
    method: 'DELETE'
  });

  pageListVehicles();
}

function pageListVehicles() {
  let url = 'https://supermercado-front-08-default-rtdb.firebaseio.com/vehicles.json';

  fetch(url)
    .then(response => response.json())
    .then(vehicles => {
      const TABLE_VEHICLES = document.getElementById('table-vehicles');

      TABLE_VEHICLES.innerHTML = '';

      for (let id in vehicles) {
        TABLE_VEHICLES.innerHTML += `
          <tr>
            <td>${vehicles[id].plate}</td>
            <td>${vehicles[id].make}</td>
            <td>${vehicles[id].model}</td>
            <td>
              <button class="btn btn-warning btn-sm">Editar</button>
              <button onclick="removeVehicle('${id}')" class="btn btn-danger btn-sm">Excluir</button>
            </td>
          </tr>
        `;

        $(document).ready( function () {
            $('#table-vehicles-db').DataTable();
        } );

      }
    });

  return `
    <h1>Gerenciar Veiculos</h1>

    <table class="table table-hover table-striped" style="text-align: center;" id="table-vehicles-db">
      <thead class="table-dark">
        <tr>
          <th>Placa</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody id="table-vehicles">
      </tbody>
    </table>
  `;
}
