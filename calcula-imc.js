

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    if(peso <=0 || peso > 300){
       tdPeso.textContent = "Peso invalida!";
            tdImc.textContent = "?";
            
       }
   else if(altura <=0 || altura >2.50){
            tdAltura.textContent = "Altura invalida!";
            tdImc.textContent = "?";
            }  
     else{
         var imc = calculaImc(peso,altura);
         tdImc.textContent = imc;
     }
    
    
         
  
       
      
}

function calculaImc(peso, altura) {
    var imc;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}


