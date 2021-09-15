function pageAddClient (){
  return`
<h1>Novo Cliente </h1>
<form>

<label for="name" >Nome</label>
<input class="form-control mb-3" id="name"   placeholder="Ex:João Maria">

<label for="CPF" >CPF</label>
<input class="form-control mb-3" id="CPF" type="text"   placeholder="Ex:000.000.000-00">

<label for="cep" >Cep</label>
<input class="form-control mb-3" id="cep" type="text"   placeholder="Ex: 000.00.000">

<label for="Endereço" >Endereço</label>
<input class="form-control mb-3" id="Endereço"   placeholder="Ex:Rua: jurandir Leonel, N: / Bairro:">


<button class="btn btn-primary">ENVIAR</button>

</form>

  `;
}
