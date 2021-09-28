function pageAddCategory() {
  return `
    <h1>Nova Categoria</h1>

    <form>
      <label for="category_name">Nome</label>
      <input class="form-control mb-3" id="category_name" required placeholder="Digite aqui">

      <label for="category_photo">Foto</label>
      <input class="form-control mb-3" id="category_photo" required placeholder="URL da foto">

      <label for="category_reference">Referência</label>
      <input class="form-control mb-3" id="category_reference" required placeholder="Digite aqui">

      <label for="category_description">Descrição</label>
      <textarea class="form-control mb-3" id="category_description" required placeholder="Digite aqui"></textarea>

      <label for="category_price">Preço</label>
      <input class="form-control mb-3" id="category_price" required placeholder="Digite Valor R$">

      <button class="btn btn-primary">ENVIAR</button>

    </form>
  `;
}
