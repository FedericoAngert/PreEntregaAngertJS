// Cotizador de Seguros

// Código para calcular precio
function queSeguro (tipoSeguro, valorSeguro) {
    let precio = 0;

    if (tipoSeguro === '1') {
        precio = valorSeguro * 0.20;
    } else if (tipoSeguro === '2'){
        precio = valorSeguro * 0.30;
    } else  {
        alert('El numero de seguro ingresado no existe, intente nuevamente');
        // alerta en caso de error
        return -1; //retorna a un numero invalido para indicar el error
    } 

    return precio;

}



//Código selección de seguro y valor
function cotizarSeguro(){
    const tipoSeguro = prompt ('Ingrese el tipo de seguro:\n1. Seguro de Auto\n2. Seguro de Bicicleta')

    let valorSeguro = 0;

    // Precio 
    while (true){
        valorSeguro = prompt ('Ingrese el valor de su articulo a asegurar')
    
        if (valorSeguro != 0){
            break; //Termina ciclo si el valor ingresado es valido
        };

        alert(`El valor del seguro ingresado no es valido, inténtelo nuevamente`)
    
    }

    return [tipoSeguro, Number(valorSeguro)];
}


//Llamado funciones
const [tipoSeguro, valorSeguro] = cotizarSeguro();


const precio = queSeguro (tipoSeguro, valorSeguro);

if (precio >= 0){
    alert(`El precio de su seguro es $${precio} al mes.`);
} else {
    alert('Debe ingresar "1" si desea seleccionar el seguro de Auto o "2" si desea el seguro de Bicicleta, refresque la pagina e intente nuvamente');
}




    









