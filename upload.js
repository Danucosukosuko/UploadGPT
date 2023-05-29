//UploadGPT
//puede ser modificado



(function() {
    'use strict';
// Crea un botón verde
var uploadButton = document.createElement('button');
uploadButton.innerHTML = 'UPLOAD FILE';
uploadButton.style.backgroundColor = 'green';
uploadButton.style.color = 'white';
uploadButton.style.position = 'fixed';
uploadButton.style.bottom = '20px';
uploadButton.style.left = '50%';
uploadButton.style.transform = 'translateX(-50%)';
uploadButton.style.borderRadius = '20px';
uploadButton.style.padding = '10px 20px';
uploadButton.style.fontSize = '16px';
uploadButton.style.zIndex = '9999';
console.log("UploadGPT Cargado con éxito");
// Agrega el botón al DOM de la página
document.body.appendChild(uploadButton);

// Función para manejar el evento clic del botón
function handleButtonClick() {
  // Crea un cuadro de diálogo de carga de archivo
  var fileInput = document.createElement('input');
  fileInput.type = 'file';

  // Agrega un evento change al cuadro de diálogo de carga de archivo
  fileInput.addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    // Lee el contenido del archivo
    reader.onload = function(e) {
      var fileContent = e.target.result;

      // Obtiene todos los campos de texto de la página
      var textboxes = document.querySelectorAll('input[type="text"], textarea');

      // Rellena los campos de texto con el contenido del archivo
      for (var i = 0; i < textboxes.length; i++) {
        textboxes[i].value = fileContent;
      }
    };

    // Lee el archivo como texto
    reader.readAsText(file);
  });

  // Simula el clic en el cuadro de diálogo de carga de archivo
  fileInput.click();
}

// Asocia el evento clic al botón
uploadButton.addEventListener('click', handleButtonClick);

})();