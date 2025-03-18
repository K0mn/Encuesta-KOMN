const resultados = [];

document.getElementById('miEncuesta').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar las respuestas seleccionadas
    const atractivo = document.querySelector('input[name="atractivo"]:checked')?.value;
    const uso = document.querySelector('input[name="uso"]:checked')?.value;
    const interfaz = document.querySelector('input[name="interfaz"]:checked')?.value;
    const expectativas = document.querySelector('input[name="expectativas"]:checked')?.value;
    const interes = document.querySelector('input[name="interes"]:checked')?.value;

    // Validar si todas las preguntas fueron respondidas
    if (!atractivo || !uso || !interfaz || !expectativas || !interes) {
        alert('Por favor, responde todas las preguntas antes de enviar.');
        return;
    }

    // Agregar las respuestas al array
    resultados.push({ atractivo, uso, interfaz, expectativas, interes });
    console.log('Resultados acumulados:', resultados);

    // Mostrar página de agradecimiento
    document.querySelector('.contenedor').classList.add('oculto');
    document.getElementById('gracias').style.display = 'block';

    // Limpiar el formulario
    document.getElementById('miEncuesta').reset();
});

// Botón "Volver a contestar"
document.getElementById('volver').addEventListener('click', function() {
    document.getElementById('gracias').style.display = 'none';
    document.querySelector('.contenedor').classList.remove('oculto');

    // Asegurar que el formulario esté limpio
    document.getElementById('miEncuesta').reset();
});

// Ver respuestas protegidas con contraseña
document.getElementById('verRespuestas').addEventListener('click', function() {
    const contraseña = prompt('Introduce la contraseña:');
    if (contraseña === 'brot') {
        alert('Respuestas acumuladas:\n' + JSON.stringify(resultados, null, 2));
    } else {
        alert('Contraseña incorrecta.');
    }
});
