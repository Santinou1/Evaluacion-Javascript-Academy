/*
3.- Cuenta cuantas veces se repite un caracter en especifico (20 ptos).
Diseña un código en el cual se pueda ingresar una cadena de texto y regrese cuantas
veces se repite un carácter dado en dicha cadena de texto.
Ejemplo la cadena dada es “hola como estas” y el carácter dado para saber cuantas veces
se repite es “o” entonces la consola debería de mostrar: el carácter “o” se repite 3 veces en
“hola como estas”.
*/

//En este ejercicio utilice un callback.

// Contador de la cantidad de veces que aparece un carácter en un string
function contarCaracteres(str, letra) {
  let contador = 0; // Inicializar el contador en 0
  for (let i = 0; i < str.length; i++) {
    // Iterar sobre cada carácter del string
    if (str.charAt(i) === letra) {
      // Si el carácter actual es igual a la letra buscada
      contador++; // Incrementar el contador
    }
  }
  return contador; // Retornar la cantidad de repeticiones encontradas
}

// Muestra la cantidad de repeticiones de un carácter en un string
function totalDeCaracteres(str, letra) {
  const repeticiones = contarCaracteres(str, letra); // Llamar a la función contarCaracteres para obtener la cantidad de repeticiones
  console.log(
    `El carácter "${letra}" se repite ${repeticiones} veces en "${str}"`
  );
}

module.exports = totalDeCaracteres;
