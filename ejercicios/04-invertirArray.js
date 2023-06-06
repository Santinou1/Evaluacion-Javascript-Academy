/*
4.- Invertir un array (10 ptos).
Escribe un código en el cual dado un arreglo , muestre en consola el arreglo original y el
mismo pero invertido.
Ejemplo arreglo original: [23,5,34,56,98,”cadena”,7] el arreglo invertido:
[7,”cadena”,98,56,34,5,23].
*/

//  Invertidor de Arrays
function invertirArray(arr) {
  const arrInvertido = arr.reverse(); // Invertir el Array utilizando el método reverse()
  return arrInvertido; // Retornar el Array invertido
}

const arrOrg = [23, 5, 34, 56, 98, "cadena", 7]; // Array original

// Función para mostrar el Array original y el Array invertido
function mostrarAmbos() {
  console.log("Array original:", arrOrg); // Mostrar el Array original en la consola
  console.log("Array invertido:", invertirArray([...arrOrg])); // Mostrar el Array invertido en la consola utilizando la función invertirArray
}
module.exports = mostrarAmbos;
