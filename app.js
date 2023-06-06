const generacionAleatoria = require("./ejercicios/01-parOImpar");
const multiplos = require("./ejercicios/02-multiplos");
const contarCaracteres = require("./ejercicios/03-contarCaracteres");
const mostrarAmbos = require("./ejercicios/04-invertirArray");
const minusculasAMayusculas = require("./ejercicios/06-minusculasAMayusculas");

console.log("EJERCICIO NRO1 PAR O IMPAR");
console.log(generacionAleatoria());
console.log("-----------------------");
console.log("EJERCICIO NRO2 MULTIPLOS");
console.log(multiplos(3));
console.log("-----------------------");
console.log("EJERCICIO NRO3 Contar Caracteres");
console.log(contarCaracteres("hola como andas", "o"));
console.log("-----------------------");
console.log("EJERCICIO NRO4 Invertir Arreglo");
console.log(mostrarAmbos([23, 5, 34, 56, 98, "cadena", 7]));
console.log("-----------------------");
console.log(
  "EJERCICIO NRO5 (PARA VISUALIZAR ESTE EJERCICIO IR AL ARCHIVO /ejercicios/05-nuevosJugadores) "
);
console.log("-----------------------");
console.log("EJERCICIO NRO6 Minusculas a Mayusculas");
console.log(minusculasAMayusculas("www.techacademy.com"));
console.log("-----------------------");
