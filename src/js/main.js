// Archivo JavaScript principal

document.addEventListener('DOMContentLoaded', () => {
  console.log('¡Documento cargado correctamente!');
  
  // Inicializar funcionalidades aquí
  init();
});

function init() {
  // Código de inicialización
  setupEventListeners();
}

function setupEventListeners() {
  // Configurar los event listeners
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });
}

function handleButtonClick(e) {
  console.log('Botón clickeado:', e.target);
  // Lógica para manejar clicks en botones
} 