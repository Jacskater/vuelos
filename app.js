 function validarFormulario() {
     
    const fechaIda = document.getElementById('fechaIda').value.trim();
    const fechaVuelta = document.getElementById('fechaVuelta').value.trim();
    
    const errores = [];
    
    const yearOne = new Date(fechaIda).getFullYear();
    const yeartwo = new Date(fechaVuelta).getFullYear();
    
    if (isNaN(yearOne) || yeartwo<yearOne || isNaN(yeartwo)) {
        errores.push("Fecha inválida (No ingreso fecha, Fechas iguales o La fecha de ida > fecha de la vuelta).");
    }
    
    const divErrores = document.getElementById("errores");
    if (errores.length > 0) {
        divErrores.innerHTML = errores.join("<br>");
    } else {
        divErrores.innerHTML = "Formulario válido";
    }
}



  function simularCosto() {
    let costo = 0;
    const pasajero = document.getElementById('pasajero').value.trim();
    const pasaje = document.getElementById('desti').value.trim();

    if (pasaje === 'SLA-COR') {
        costo = 120000;
    }
    if (pasaje === 'SLA-BUE') {
        costo = 210800;
    }
    if (pasaje === 'SLA-MDZ') {
        costo = 135000;
    }

    costo = costo * parseInt(pasajero);

    const divCosto = document.getElementById("precios");
    divCosto.innerHTML = '$' + costo.toLocaleString();
}


