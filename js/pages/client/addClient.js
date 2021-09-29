function saveClient () {
  event.preventDefault();

  let newClient = {
    cpf: document.getElementById('cpf').value,
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value + " - " +  document.getElementById('cep').value,
  }

  let url = 'https://supermercado-front-08-default-rtdb.firebaseio.com/clients.json';

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newClient),
  });

  alert('Novo cliente cadastrado')
}

function searchCEP() {
  const INPUT_CEP = document.getElementById('cep');
  const INPUT_ENDERECO = document.getElementById('address');

  fetch(`https://viacep.com.br/ws/${INPUT_CEP.value}/json/`)
    .then(resposta => resposta.json())
    .then(dados => {
      INPUT_ENDERECO.value = `${dados.logradouro}, ${dados.bairro}, ${dados.localidade}-${dados.uf}`;
    });
};

function pageAddClient (){
  return`
  <h1>Novo Cliente </h1>

  <form onsubmit="saveClient()" method="post">

  <label for="name">Nome</label>
  <input class="form-control mb-3" id="name" required placeholder="Ex:João Maria">

  <label for="cpf">CPF</label>
  <input class="form-control mb-3" id="cpf" type="text" required placeholder="Ex: 000.000.000-00">

  <label for="phone"> Telefone </label>
  <input class="form-control mb-3" id="phone" type="text" required placeholder="Ex: (00) 90000-0000"

  <label for="cep">Cep</label>
  <input class="form-control mb-3" id="cep" type="text" required placeholder="Ex: 000.00.000" onblur="searchCEP()">

  <label for="address">Endereço</label>
  <input class="form-control mb-3" id="address" required placeholder="Ex: Rua Jurandir Leonel, N: / Bairro:">

  <button class="btn btn-primary">ENVIAR</button>

  </form>

  `;
}
