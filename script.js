const resultados = [];

document.getElementById('miEncuesta').addEventListener('submit', function(event) {
    event.preventDefault();

    const atractivo = document.querySelector('input[name="atractivo"]:checked').value;
    const uso = document.querySelector('input[name="uso"]:checked').value;
    const interfaz = document.querySelector('input[name="interfaz"]:checked').value;
    const expectativas = document.querySelector('input[name="expectativas"]:checked').value;
    const interes = document.querySelector('input[name="interes"]:checked').value;

    // Agregar respuestas al array
    resultados.push({ atractivo, uso, interfaz, expectativas, interes });
    console.log('Resultados:', resultados);

    // Mostrar página de gracias
    document.querySelector('.contenedor').classList.add('oculto');
    document.getElementById('gracias').style.display = 'block';
});

// Botón "Volver a contestar"
document.getElementById('volver').addEventListener('click', function() {
    document.getElementById('gracias').style.display = 'none';
    document.querySelector('.contenedor').classList.remove('oculto');
});

// Ver respuestas protegidas con contraseña
document.getElementById('verRespuestas').addEventListener('click', function() {
    const contraseña = prompt('Introduce la contraseña:');
    if (contraseña === 'brot') {
        alert('Respuestas:\n' + JSON.stringify(resultados, null, 2));
    } else {
        alert('Contraseña incorrecta.');
    }
});
