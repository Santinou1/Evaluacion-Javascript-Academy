/*
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
*/

// Se crea la clase Persona
class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  // Método para mostrar los detalles de la persona
  getDetalles() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Edad: ${this.edad}`);
  }
}

// Se crea la clase Jugador, que hereda de Persona
class Jugador extends Persona {
  constructor(nombre, apellido, edad, posicion) {
    // Llama al constructor de la clase padre (Persona)
    super(nombre, apellido, edad);
    this.posicion = posicion;
  }

  // Sobrescribe el método getDetalles de Persona para incluir la posición
  getDetalles() {
    super.getDetalles();
    console.log(`Posición: ${this.posicion}`);
  }
}

// Se crea de la clase Entrenador, que hereda de Persona
class Entrenador extends Persona {
  constructor(nombre, apellido, edad, añosExperiencia, idFederacion) {
    // Llama al constructor de la clase padre (Persona)
    super(nombre, apellido, edad);
    this.añosExperiencia = añosExperiencia;
    // Asigna un ID de federación aleatorio si no se proporciona
    this.idFederacion =
      idFederacion || Math.floor(Math.random() * 90000) + 10000;
  }

  // Sobreescribe el método getDetalles de Persona para incluir la experiencia y el ID de federación
  getDetalles() {
    super.getDetalles();
    console.log(`Años de experiencia: ${this.añosExperiencia}`);
    console.log(`ID de federación: ${this.idFederacion}`);
  }
}

// Definición de la clase Equipo
class Equipo {
  constructor(entrenador, jugadores) {
    this.entrenador = entrenador;
    this.jugadores = jugadores;
  }

  // Método para mostrar los detalles del equipo, incluyendo los del entrenador y los jugadores
  getDetalles() {
    console.log("Detalles del entrenador:");
    this.entrenador.getDetalles();

    console.log("Detalles de los jugadores:");
    this.jugadores.forEach((jugador) => {
      jugador.getDetalles();
      console.log("-----");
    });
  }
}

// Crear jugadores
const jugadores = [
  new Jugador("Juan", "Pérez", 25, "Portero"),
  new Jugador("Carlos", "Gómez", 28, "Defensa"),
  new Jugador("Luis", "Hernández", 22, "Medio"),
  new Jugador("Pedro", "Ramírez", 30, "Delantero"),
];

// Crear entrenador
const entrenador = new Entrenador("Roberto", "González", 45, 20);

// Crear equipo
const equipo = new Equipo(entrenador, jugadores);

// Obtener detalles del equipo
equipo.getDetalles();
