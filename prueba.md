Examen práctico
1.- Random par o impar(10 ptos).
Generar un código el cual genere 5 números aleatorios(Math.random()*100) enteros y
devuelva si el número generado es par o impar.
Ejemplo:
Primera iteración: numeroGenerado = 5 // el número es impar
Segunda iteración: numeroGenerado = 12 // el número es par
2.- Múltiplos de un número dado (10 ptos).
Escribir el código que muestre en consola los múltiplos de un número entero
dado(definido en una variable para ser manipulado) en una secuencia del 1 al 100.
Ejemplo si el número dado es 3 sus múltiplos serían 3,6,9,12,15…..21, etc.
3.- Cuenta cuantas veces se repite un caracter en especifico (20 ptos).
Diseña un código en el cual se pueda ingresar una cadena de texto y regrese cuantas
veces se repite un carácter dado en dicha cadena de texto.
Ejemplo la cadena dada es “hola como estas” y el carácter dado para saber cuantas veces
se repite es “o” entonces la consola debería de mostrar: el carácter “o” se repite 3 veces en
“hola como estas”.
4.- Invertir un array (10 ptos).
Escribe un código en el cual dado un arreglo , muestre en consola el arreglo original y el
mismo pero invertido.
Ejemplo arreglo original: [23,5,34,56,98,”cadena”,7] el arreglo invertido:
[7,”cadena”,98,56,34,5,23].
5.- Nuevos jugadores (50 ptos).
1. Clase persona con propiedades nombre, apellido y edad
1.1. Crea el método getDetalles() el cual imprimirá en consola los atributos de la
persona.
1.2. El constructor recibe y asigna nombre, apellido y edad a los atributos internos.
2. La clase jugador hereda de persona e incluye la propiedad de posición
2.1. sobreescribir el método getDetalles() para que muestre en consola los detalles
de persona y los de jugador.
2.2. El constructor recibe y asigna posición a los atributos internos.
3. Clase entrenador hereda de persona y agrega años de experiencia y el id de
federación
3.1. Sobreescribir el método getDetalles() para que muestre en consola los detalles
de persona y entrenador.
_______________________________________________________________________________________________
_______________________________________________________________________________________________
3.2. El constructor recibe y asigna posición a los atributos internos.
3.3. En el constructor configurar para que si no se recibe un id de federación este
asigne un número aleatorio de 5 dígitos
4. Clase equipo tiene las propiedades de entrenador y jugadores
4.1. El constructor recibe el objeto de director y un arreglo con los jugadores que
pertenecen al equipo (con 3 o 4 jugadores como ejemplo está bien)
4.2. el método getDetalles() mostrar en consola los detalles del entrenador y de los
jugadores.
5. ¡Probemos!
5.1. crea un arreglo de 4 jugadores con diferentes nombres, edades y posición
(Portero, Defensa , Medio y Delantero).
5.2. crea un objeto de tipo entrenador con su nombre, edad y años de experiencia
5.3. crea un equipo con los objetos de entrenador y estudiantes demostrando el
funcionamiento de jerarquía.
Ejercicio bonus - Convertir caracteres a mayúsculas. (15 ptos).
Diseñar un código que logre convertir caracteres a mayúsculas hasta encontrar un punto, solo
los caracteres previos al Primer punto el resto se quedan en minúsculas, muestra en consola el
antes y el después.
Ejemplo: entrada: www.techacademy.com
salida: WWW.techacademy.com
