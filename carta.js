// JavaScript para la página de inicio del restaurante

// Función para cargar el contenido de la página
function cargarPagina() {
    // Aquí puedes agregar lógica personalizada, como cargar imágenes, obtener datos del servidor, etc.
}

// Función para manejar el envío del formulario de reserva
function enviarReserva() {
    // Aquí puedes agregar código para procesar el formulario de reserva, enviarlo al servidor, etc.
    // Por ejemplo, puedes usar AJAX para enviar datos al servidor y recibir una confirmación.
    function updateDishFields() {
  const numberOfPeople = document.getElementById('numero_personas').value;
  const dishFields = document.getElementById('dish-fields');

  // Remove existing dish fields
  while (dishFields.firstChild) {
    dishFields.removeChild(dishFields.firstChild);
  }

  // Add dish fields based on the number of people
  for (let i = 1; i <= numberOfPeople; i++) {
    const dishLabel = document.createElement('label');
    dishLabel.textContent = `Plato ${i}:`;
    dishLabel.setAttribute('for', `plato_${i}`);

    const dishInput = document.createElement('input');
    dishInput.type = 'text';
    dishInput.className = 'form-control';
    dishInput.id = `plato_${i}`;
    dishInput.name = `plato_${i}`;
    dishInput.required = true;

    const dishListItem = document.createElement('li');
    dishListItem.appendChild(dishLabel);
    dishListItem.appendChild(dishInput);

    dishFields.appendChild(dishListItem);
  }
}

}

// Agregar un evento de carga para ejecutar la función cargarPagina cuando se cargue la página
window.addEventListener('load', cargarPagina);

// Agregar un evento de envío al formulario de reserva
const formularioReserva = document.getElementById('formulario-reserva'); // Reemplaza 'formulario-reserva' con el ID real de tu formulario
formularioReserva.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    enviarReserva();
});
