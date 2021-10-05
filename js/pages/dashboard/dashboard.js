


function pageDashboard() {
  let urlCategories = 'https://supermercado-front-08-default-rtdb.firebaseio.com/categories.json'
  let urlProducts = 'https://supermercado-front-08-default-rtdb.firebaseio.com/products.json'
  let urlClients = 'https://supermercado-front-08-default-rtdb.firebaseio.com/clients.json'


  fetch(urlCategories)
  .then(response => response.json())
  .then(categories => {
    document.getElementById('h1_categories').innerHTML = Object.keys(categories).length
  })

  fetch(urlProducts)
  .then(response => response.json())
  .then(products => {
    document.getElementById('h1_products').innerHTML = Object.keys(products).length
  })

  fetch(urlClients)
  .then(response => response.json())
  .then(clients => {
    document.getElementById('h1_clients').innerHTML = Object.keys(clients).length
  })

  return `
    <h1>Dashboard</h1>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css
">

<div class="jumbotron">
<div class="row w-100">
        <div class="col-md-3">
            <div class="card border-info mx-sm-1 p-3">
                <div class="card border-info shadow text-info p-3 my-card" ><span class="fa fa-tags" aria-hidden="true"></span></div>
                <div class="text-info text-center mt-3"><h4>Categorias</h4></div>
                <div class="text-info text-center mt-2"><h1 id="h1_categories">0</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-success mx-sm-1 p-3">
                <div class="card border-success shadow text-success p-3 my-card"><span class="fa fa-shopping-cart" aria-hidden="true"></span></div>
                <div class="text-success text-center mt-3"><h4>Produtos</h4></div>
                <div class="text-success text-center mt-2"><h1 id="h1_products">0</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-danger mx-sm-1 p-3">
                <div class="card border-danger shadow text-danger p-3 my-card" ><span class="fa fa-money" aria-hidden="true"></span></div>
                <div class="text-danger text-center mt-3"><h4>Pedidos</h4></div>
                <div class="text-danger text-center mt-2"><h1 id="h1_pedidos">0</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-warning mx-sm-1 p-3">
                <div class="card border-warning shadow text-warning p-3 my-card" ><span class="fa fa-users" aria-hidden="true"></span></div>
                <div class="text-warning text-center mt-3"><h4>Clientes</h4></div>
                <div class="text-warning text-center mt-2"><h1 id="h1_clients">0</h1></div>
            </div>
        </div>
     </div>
</div>
  `;
}
