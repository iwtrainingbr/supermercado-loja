function saveCategory () {
  event.preventDefault();

  let newCategory = {
    name: document.getElementById('category_name').value,
    image: document.getElementById('category_photo').value,
    description: document.getElementById('category_description').value,
    reference: document.getElementById('category_reference').value
  };

  let url = 'https://supermercado-front-08-default-rtdb.firebaseio.com/categories.json';

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newCategory),
  });

  alert('Nova categoria cadastrado')

}

function pageAddCategory() {
  return `
    <h1>Nova Categoria</h1>

    <form onsubmit="saveCategory()">
      <label for="category_name">Nome</label>
      <input class="form-control mb-3" id="category_name" required placeholder="Digite aqui">

      <label for="category_photo">Foto</label>
      <input class="form-control mb-3" id="category_photo" required placeholder="URL da foto">

      <label for="category_reference">Referência</label>
      <input class="form-control mb-3" id="category_reference" required placeholder="Digite aqui">

      <label for="category_description">Descrição</label>
      <textarea class="form-control mb-3" id="category_description" required placeholder="Digite aqui"></textarea>

      <button class="btn btn-primary">ENVIAR</button>

    </form>
  `;
}
