// Cotizador de Seguros

// Objetos
const segurosDisponibles = [
    { tipo: '1', descripcion: 'Seguro de Auto' },
    { tipo: '2', descripcion: 'Seguro de Bicicleta' }
];

// Código para calcular precio
function queSeguro(tipoSeguro, valorSeguro) {
    let precio = 0;

    if (tipoSeguro === '1') {
        precio = valorSeguro * 0.017;
    } else if (tipoSeguro === '2') {
        precio = valorSeguro * 0.019;
    } else {
        alert('El número de seguro ingresado no existe, intente nuevamente');
        // alerta en caso de error
        return -1; // retorna un número inválido para indicar el error
    }

    return precio;
}

//Código selección de seguro y valor
function cotizarSeguro() {
    alert('Bienvenido al cotizador de seguros');
    alert('Seleccione el tipo de seguro:');

    for (const seguro of segurosDisponibles) {
        alert(`${seguro.tipo}. ${seguro.descripcion}`);
    }

    let tipoSeguro = '';
    while (tipoSeguro !== '1' && tipoSeguro !== '2') {
        tipoSeguro = prompt('Ingrese el tipo de seguro:');
        if (tipoSeguro !== '1' && tipoSeguro !== '2') {
            alert('El tipo de seguro ingresado no es válido, inténtelo nuevamente');
        }
    }

    let valorSeguro = 0;
    while (true) {
        valorSeguro = prompt('Ingrese el valor de su artículo a asegurar:');
        if (valorSeguro !== '') {
            break;
        }
        alert('El valor del seguro ingresado no es válido, inténtelo nuevamente');
    }

    return [tipoSeguro, Number(valorSeguro)];
}

//Llamado funciones
const [seguroSelec, precioSegSec] = cotizarSeguro();

const precio = queSeguro(seguroSelec, precioSegSec);

if (precio >= 0) {
    alert(`El precio de su seguro es $${precio.toFixed(2)} al mes.`);
} else {
    alert('Debe ingresar "1" si desea seleccionar el seguro de Auto o "2" si desea el seguro de Bicicleta, refresque la página e intente nuevamente');
}





    









