/*
  2.- Múltiplos de un número dado (10 ptos).
Escribir el código que muestre en consola los múltiplos de un número entero
dado(definido en una variable para ser manipulado) en una secuencia del 1 al 100.
Ejemplo si el número dado es 3 sus múltiplos serían 3,6,9,12,15…..21, etc.
  */

// Encontrador de los múltiplos de un número dado
function multiplos(num) {
  for (let i = 1; i <= 100; i++) {
    // Iterar del 1 al 100
    if (i % num === 0) {
      // Verificar si el número actual es múltiplo de "num" gracias al operador logico de "%"
      console.log(i); // Mostrar el número actual, ya que es múltiplo
    }
  }
}

module.exports = multiplos;
