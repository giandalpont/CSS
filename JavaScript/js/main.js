// console.log('Olá, sou um console!');
//TODO: alert('Sou um alert');
//TODO: document.write('<h1>Olá meu povo</h1>');

var titulo = document.querySelector('.titulo');
titulo.textContent = "Cadastro Nutrição";

titulo.addEventListener("click",()=>{
  console.log("mostra mensagem");
});

function mostraMensagem(){
  console.log("mostra mensagem");
}

var pacientes = document.querySelectorAll(".paciente");
 
for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

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
    paciente.classList.add("estilo-invalido");  // paciente.style.backgroundColor = "lightcoral";
  }

  if(altura <= 0 || altura >= 3.00){
    // console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("estilo-invalido");  // paciente.style.backgroundColor = "lightcoral";
  }

  if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}



var botaoAdicionar = document.querySelector("#adicionar-paciente");
  botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    // console.log("Estou sendo clicado.");

    var form = document.querySelector("#form-adicionar");
    // console.log(form);

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    // console.log(nome);
    // console.log(peso);
    // console.log(altura);
    // console.log(gordura);

    pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textcontent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-paciente");
      tabela.appendChild(pacienteTr);
    
  });
