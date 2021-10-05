function componentNavbar() {
  return `

      <div class="col-2">
        <img src="imagens/mercado-todo-dia-logo.png" width="150px" class="text-left">
      </div>

      <div class="btn-group col-10">
        <button data-component="menu" data-action="dashboard" class="btn btn-dark">Dashboard</button>

        <button type="button" data-menu-group="vehicles" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Veiculos
        </button>
        <ul class="dropdown-menu">
          <li><a data-component="menu" data-menu-item="vehicles" data-action="addVehicle" class="dropdown-item" href="#">Novo</a></li>
          <li><a data-component="menu" data-menu-item="vehicles" data-action="listVehicles" class="dropdown-item" href="#">Listar</a></li>
        </ul>

        <button type="button" data-menu-group="clients" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Clientes
        </button>
        <ul class="dropdown-menu">
          <li><a data-component="menu" data-menu-item="clients" data-action="addClient" class="dropdown-item" href="#">Novo</a></li>
          <li><a data-component="menu" data-menu-item="clients" data-action="listClients" class="dropdown-item" href="#">Listar</a></li>
        </ul>

        <button type="button" data-menu-group="categories" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Categorias
        </button>
        <ul class="dropdown-menu">
          <li><a data-component="menu" data-menu-item="categories" data-action="addCategory" class="dropdown-item" href="#">Nova</a></li>
          <li><a data-component="menu" data-menu-item="categories" data-action="listCategories" class="dropdown-item" href="#">Listar</a></li>
        </ul>

        <button type="button" data-menu-group="products" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Produtos
        </button>
        <ul class="dropdown-menu">
          <li><a data-component="menu" data-menu-item="products" data-action="addProduct" class="dropdown-item" href="#">Nova</a></li>
          <li><a data-component="menu" data-menu-item="products" data-action="listProducts" class="dropdown-item" href="#">Listar</a></li>
        </ul>

        <button type="button" data-menu-group="deliveryman" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Entregadores
        </button>

        <ul class="dropdown-menu">
          <li><a data-component="menu" data-menu-item="deliveryman" data-action="addDeliveryman" class="dropdown-item" href="#">Nova</a></li>
          <li><a data-component="menu" data-menu-item="deliveryman" data-action="listDeliveryman" class="dropdown-item" href="#">Listar</a></li>
        </ul>
      </div>
    `;
}
