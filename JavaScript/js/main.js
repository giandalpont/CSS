// console.log('Olá, sou um console!');
//TODO: alert('Sou um alert');
//TODO: document.write('<h1>Olá meu povo</h1>');

var titulo = document.querySelector('.titulo');
titulo.textContent = "Cadastro Nutrição";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 300) {
  // console.log('peso inválido!');
  pesoEhValido = false;
  tdImc.textContent = "Peso inválido!";
}

if(altura <= 0 || altura >= 3.00){
  // console.log("Altura inválida!");
  alturaEhValida = false;
  tdImc.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido) {
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
}
