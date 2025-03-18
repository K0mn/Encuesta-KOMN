const resultados = [];

document.getElementById('miEncuesta').addEventListener('submit', function(event) {
    event.preventDefault();

    const atractivo = document.querySelector('input[name="atractivo"]:checked').value;
    const uso = document.querySelector('input[name="uso"]:checked').value;
    const interfaz = document.querySelector('input[name="interfaz"]:checked').value;
    const expectativas = document.querySelector('input[name="expectativas"]:checked').value;
    const interes = document.querySelector('input[name="interes"]:checked').value;

    // Agregar las respuestas al array
    resultados.push({ atractivo, uso, interfaz, expectativas, interes });
    console.log('Resultados:', resultados);

    // Crear archivo JSON
    const jsonData = JSON.stringify(resultados, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Configurar el enlace para descargar
    const descargar = document.getElementById('descargar');
    descargar.href = url;
});
