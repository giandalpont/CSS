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

  var pesoEhValido = validaPeso(peso); 
  var alturaEhValida = validaAltura(altura);
  // console.log(pesoEhValido)

  if (!pesoEhValido) {
    // console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");  // paciente.style.backgroundColor = "lightcoral";
  }

  if (!alturaEhValida){
    // console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("estilo-invalido");  // paciente.style.backgroundColor = "lightcoral";
  };

  if (alturaEhValida && pesoEhValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  };

};

function validaPeso(peso){
  if(peso >= 0 && peso <= 300){
    return true;
  } 
  else{
    return false;
  }
};

function validaAltura(altura){
  if(altura >= 0 && altura <= 3.0){
    return true;
  }else{
    return false;
  }
}

function calculaImc (peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);
  return imc.toFixed(2);
};