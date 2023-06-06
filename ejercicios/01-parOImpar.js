/* 1.- Random par o impar(10 ptos).
Generar un código el cual genere 5 números aleatorios(Math.random()*100) enteros y
devuelva si el número generado es par o impar.
Ejemplo:
Primera iteración: numeroGenerado = 5 // el número es impar
Segunda iteración: numeroGenerado = 12 // el número es par
 */

// Gera un número aleatorio entre 0 y 99
function numeroAleatorio() {
  return Math.floor(Math.random() * 100);
}

// Determina si un número es par o impar
function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

// Generar 5 números aleatorios y determinar si son pares o impares
function generacionAleatoria() {
  for (let i = 0; i < 5; i++) {
    const numeroGenerado = numeroAleatorio();
    const resultado = esParOImpar(numeroGenerado);
    console.log( numeroGenerado + " // el numero es " + resultado);
  }
}
module.exports = generacionAleatoria;
