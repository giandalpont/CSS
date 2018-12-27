var pacientes = document.querySelectorAll("#tabela-paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    // console.log("duplo click")
    // console.log(event.target);
    event.target.parentNode.classList.add("remove");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

    

    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;
    // paiDoAlvo.remove();
});


// pacientes.forEach(function(paciente){
//     console.log(paciente)
//     paciente.addEventListener("dblclick", function(){
//         console.log("duplo click")
//         this.remove();
//     });
// });
