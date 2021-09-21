function componentNavbar() {
  return `
      <button data-component="menu" value="dashboard" class="btn btn-outline-dark">Dashboard</button>
      <button data-component="menu" value="listClients" class="btn btn-outline-dark">Clientes</button>
      <button data-component="menu" value="addClient" class="btn btn-outline-dark">Novo Cliente</button>
      <button data-component="menu" value="listCategories" class="btn btn-outline-dark">Categorias</button>
      <button data-component="menu" value="addCategory" class="btn btn-outline-dark">Nova Categoria</button>      
      <button data-component="menu" value="listProducts" class="btn btn-outline-dark">Produtos</button>
      <button data-component="menu" value="addProduct" class="btn btn-outline-dark">Novo Produto</button>
  `;
}
