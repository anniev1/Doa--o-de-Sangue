document.getElementById("sangueDoa").addEventListener("submit", function (e) {
    e.preventDefault();



 //pega o nome 
    let nome = document.getElementById("nome").value;
//divide o nome 
    let nomeDividido = nome.split ("")
//guarda o sobrenome
    let sobrnome = nomeDividido [1];

    let email = document.getElementById("email").value.trim();
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let tipo = document.getElementById("tipo").value;
    let telefone = document.getElementById("telefone").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let estado = document.getElementById("estado").value.trim();
    let resultado = document.getElementById("resultado");

   if 
