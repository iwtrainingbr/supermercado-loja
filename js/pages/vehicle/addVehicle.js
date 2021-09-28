function saveVehicle () {
  event.preventDefault();

  let newVehicle = {
    make: document.getElementById('make').value,
    model: document.getElementById('model').value,
    plate: document.getElementById('plate').value,
  };

  let url = 'https://supermercado-front-08-default-rtdb.firebaseio.com/vehicles.json';

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newVehicle),
  });

  alert('Novo veiculo cadastrado');
}

function pageAddVehicle (){
  return`
    <h1>Novo Veiculo </h1>
    <form onsubmit="saveVehicle()" method="post" action="">
      <label for="make">Marca</label>
      <input class="form-control mb-3" id="make" required placeholder="Ex: Chevrolet">

      <label for="model">Modelo</label>
      <input class="form-control mb-3" id="model" type="text" required placeholder="Ex: Celta">

      <label for="plate">Placa</label>
      <input class="form-control mb-3" id="plate" type="text" required placeholder="Ex: XXX-2020">

      <button class="btn btn-primary">ENVIAR</button>
    </form>
  `;
}
