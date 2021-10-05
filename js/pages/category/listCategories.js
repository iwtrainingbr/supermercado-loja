function removeCategory(id) {
  let url = `https://supermercado-front-08-default-rtdb.firebaseio.com/categories/${id}.json`;
  if (false === confirm('Você tem certeza que deseja excluir?') ) {
    return;
  }

  fetch(url, {method: 'DELETE'})
  .then(response => pageListCategories());



}

function pageListCategories() {
    let url = 'https://supermercado-front-08-default-rtdb.firebaseio.com/categories.json';

    fetch(url)
      .then(response => response.json())
      .then(categories => {
        const TABLE_CATEGORIES = document.getElementById('table-categories');

        TABLE_CATEGORIES.innerHTML = '';

        for (let id in categories) {
          TABLE_CATEGORIES.innerHTML += `
            <tr>
              <td>${categories[id].name}</td>
              <td>${categories[id].reference || "---"}</td>
              <td>
                <a href="${categories[id].image}" data-lightbox="image-1" data-title="${categories[id].name}">
                  <img src="${categories[id].image}" width="60" height="40">
                </a>

              </td>
              <td>${categories[id].description}</td>
              <td>
                <button class="btn btn-warning btn-sm">Editar</button>
                <button onclick="removeCategory('${id}')" class="btn btn-danger btn-sm">Excluir</button>
              </td>
            </tr>
          `;

          $(document).ready( function () {
              $('#table-categories-db').DataTable();
          } );
        }
      });

  return `
    <h1>Gerenciar Categorias</h1>

    <table class="table table-hover table-striped" id="table-categories-db">
      <thead class="table-dark">
        <tr>
          <th>Nome</th>
          <th>Referência</th>
          <th>Foto</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody id="table-categories">

      </tbody>
    </table>
  `;
}
