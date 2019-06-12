var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        var res = confirm("Deseja re mover paciente?");
        if(res == true){
            this.remove();
           }
       
    });
});


