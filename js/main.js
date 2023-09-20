
document.addEventListener('DOMContentLoaded', () => {
    const tipoSeguroElement = document.getElementById('tipoSeguro');
    const valorSeguroElement = document.getElementById('valorSeguro');
    const calcularButton = document.getElementById('calcular');
    const resultadoElement = document.getElementById('resultado');
    const guardarButton = document.getElementById('guardar');
    const recuperarButton = document.getElementById('recuperar');

    // Datos de seguros en formato JSON local
    const segurosJSON = '[{"tipo": "auto", "descripcion": "Seguro de Auto"}, {"tipo": "bicicleta", "descripcion": "Seguro de Bicicleta"}, {"tipo": "hogar", "descripcion": "Seguro de Hogar"}, {"tipo": "vida", "descripcion": "Seguro de Vida"}]';
    const segurosDisponibles = JSON.parse(segurosJSON);

    // Llena opciones de tipo de seguro desde el JSON local
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
            resultadoElement.textContent = 'Debe seleccionar un tipo de seguro válido.';
        }
    }

    // Manejador de evento para el botón "Calcular"
    calcularButton.addEventListener('click', calcularPrecio);

    // Función para calcular el precio del seguro
    function queSeguro(tipoSeguro, valorSeguro) {
        let precio = 0;

        if (tipoSeguro === 'auto') {
            precio = valorSeguro * 0.017;
        } else if (tipoSeguro === 'bicicleta') {
            precio = valorSeguro * 0.019;
        } else if (tipoSeguro === 'hogar') {
            precio = valorSeguro * 0.025;
        } else if (tipoSeguro === 'vida') {
            precio = valorSeguro * 0.022;
        } else {
            return -1;
        }

        return precio;
    }

    // Manejador de evento para el botón "Guardar en Local Storage"
    guardarButton.addEventListener('click', () => {
        const tipoSeguro = tipoSeguroElement.value;
        const valorSeguro = parseFloat(valorSeguroElement.value);

        if (isNaN(valorSeguro) || valorSeguro <= 0) {
            alert('Ingrese un valor de seguro válido antes de guardar.');
            return;
        }

        const datosSeguro = { tipoSeguro, valorSeguro };
        localStorage.setItem('datosSeguro', JSON.stringify(datosSeguro));
        alert('Datos de seguro guardados en Local Storage.');
    });

    // Manejador de evento para el botón "Recuperar de Local Storage"
    recuperarButton.addEventListener('click', () => {
        const datosSeguroJSON = localStorage.getItem('datosSeguro');
        if (datosSeguroJSON) {
            const datosSeguro = JSON.parse(datosSeguroJSON);
            tipoSeguroElement.value = datosSeguro.tipoSeguro;
            valorSeguroElement.value = datosSeguro.valorSeguro;
            calcularPrecio(); // Calcular el precio con los datos almacenados
        } else {
            alert('No hay datos de seguro almacenados en Local Storage.');
        }
    });
});



    









