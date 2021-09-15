function pageAddCategory() {
  return `
    <h1>Nova Categoria</h1>

    <form>
      <label for="category_name">Nome</label>
      <input class="form-control mb-3" id="category_name" placeholder="Digite aqui">

      <label for="category_photo">Foto</label>
      <input class="form-control mb-3" id="category_photo" placeholder="URL da foto">

      <label for="category_reference">Referência</label>
      <input class="form-control mb-3" id="category_reference" placeholder="Digite aqui">

      <label for="category_description">Descrição</label>
      <textarea class="form-control mb-3" id="category_description" placeholder="Digite aqui"></textarea>

      <button class="btn btn-primary">ENVIAR</button>  

    </form>
  `;
}
