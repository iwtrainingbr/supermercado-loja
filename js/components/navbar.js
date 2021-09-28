function componentNavbar() {
  return `
      <div class="btn-group">
        <button data-component="menu" data-action="dashboard" class="btn btn-outline-dark">Dashboard</button>

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
      </div>
    `;
}
