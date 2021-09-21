function pageDashboard() {
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
                <div class="text-info text-center mt-2"><h1>234</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-success mx-sm-1 p-3">
                <div class="card border-success shadow text-success p-3 my-card"><span class="fa fa-shopping-cart" aria-hidden="true"></span></div>
                <div class="text-success text-center mt-3"><h4>Produtos</h4></div>
                <div class="text-success text-center mt-2"><h1>9332</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-danger mx-sm-1 p-3">
                <div class="card border-danger shadow text-danger p-3 my-card" ><span class="fa fa-money" aria-hidden="true"></span></div>
                <div class="text-danger text-center mt-3"><h4>Pedidos</h4></div>
                <div class="text-danger text-center mt-2"><h1>346</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-warning mx-sm-1 p-3">
                <div class="card border-warning shadow text-warning p-3 my-card" ><span class="fa fa-users" aria-hidden="true"></span></div>
                <div class="text-warning text-center mt-3"><h4>Clientes</h4></div>
                <div class="text-warning text-center mt-2"><h1>346</h1></div>
            </div>
        </div>
     </div>
</div>
  `;
}
