// Limpiar datos almacenados en Local Storage al cargar la página
localStorage.removeItem('datosSeguro');

// Objeto con seguros disponibles en formato JSON
const segurosJSON = '[{"tipo": "1", "descripcion": "Seguro de Auto"}, {"tipo": "2", "descripcion": "Seguro de Bicicleta"}]';
const segurosDisponibles = JSON.parse(segurosJSON);

// Obtener elementos del DOM
const tipoSeguroElement = document.getElementById('tipoSeguro');
const valorSeguroElement = document.getElementById('valorSeguro');
const calcularButton = document.getElementById('calcular');
const resultadoElement = document.getElementById('resultado');

// Llenar opciones de tipo de seguro desde el objeto
segurosDisponibles.forEach(seguro => {
    const option = document.createElement('option');
    option.value = seguro.tipo;
    option.textContent = seguro.descripcion;
    tipoSeguroElement.appendChild(option);
});

// Función para calcular el precio del seguro
function calcularPrecio() {
    const tipoSeguro = tipoSeguroElement.value;
    const valorSeguro = parseFloat(valorSeguroElement.value);

    if (isNaN(valorSeguro) || valorSeguro <= 0) {
        resultadoElement.textContent = 'Ingrese un valor de seguro válido.';
        return;
    }

    const precio = queSeguro(tipoSeguro, valorSeguro);

    if (precio >= 0) {
        resultadoElement.textContent = `El precio de su seguro es $${precio.toFixed(2)} al mes.`;

        // Almacenar valores en el Local Storage
        const datosSeguro = { tipoSeguro, valorSeguro };
        localStorage.setItem('datosSeguro', JSON.stringify(datosSeguro));
    } else {
        resultadoElement.textContent = 'Debe seleccionar "Seguro de Auto" (1) o "Seguro de Bicicleta" (2).';
    }
}

// Manejador de evento para el botón "Calcular"
calcularButton.addEventListener('click', calcularPrecio);

// Función para calcular el precio del seguro
function queSeguro(tipoSeguro, valorSeguro) {
    let precio = 0;

    if (tipoSeguro === '1') {
        precio = valorSeguro * 0.017;
    } else if (tipoSeguro === '2') {
        precio = valorSeguro * 0.019;
    } else {
        return -1;
    }

    return precio;
}

// Cargar datos almacenados en Local Storage si existen
const datosSeguroJSON = localStorage.getItem('datosSeguro');
if (datosSeguroJSON) {
    const datosSeguro = JSON.parse(datosSeguroJSON);
    tipoSeguroElement.value = datosSeguro.tipoSeguro;
    valorSeguroElement.value = datosSeguro.valorSeguro;
    calcularPrecio(); // Calcular el precio con los datos almacenados
}





    









