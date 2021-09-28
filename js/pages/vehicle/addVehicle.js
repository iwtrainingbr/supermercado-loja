function pageAddVehicle (){
  return`
    <h1>Novo Veiculo </h1>
    <form>

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
