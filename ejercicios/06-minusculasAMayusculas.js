/*
Ejercicio bonus - Convertir caracteres a mayúsculas. (15 ptos).
Diseñar un código que logre convertir caracteres a mayúsculas hasta encontrar un punto, solo
los caracteres previos al Primer punto el resto se quedan en minúsculas, muestra en consola el
antes y el después.
Ejemplo: entrada: www.techacademy.com
salida: WWW.techacademy.com
*/
function convertirAMayusculas(str) {
  let newStr = ""; // Variable para almacenar el nuevo string
  let punto = false; // Booleano para saber si se ha encontrado un punto

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ".") {
      punto = true; // Si se encuentra un punto, se cambia el booleano
      newStr += str[i]; // Se agrega el punto al nuevo string
    } else {
      if (!punto) {
        newStr += str[i].toUpperCase(); // Si no se ha encontrado un punto, se convierte el carácter a mayúscula y se agrega al nuevo string
      } else {
        newStr += str[i]; // Si se ha encontrado un punto, se agrega el carácter tal como está al nuevo string
      }
    }
  }

  return newStr; // Retornar el nuevo string convertido a mayúsculas hasta el primer punto
}

function mostrarAntesyDespues(strOrg) {
  console.log("Antes:", strOrg); // Mostrar el string original en la consola
  console.log("Después:", convertirAMayusculas(strOrg)); // Mostrar el string convertido a mayúsculas hasta el primer punto en la consola utilizando la función convertirAMayusculas
}

module.exports = mostrarAntesyDespues;
