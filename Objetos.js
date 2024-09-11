/* 
1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
*/

//1.Definir el objeto persona

const persona = {
    nombre: "Bairon",
    edad: 22,
    genero: "Masculino"
};

// Mostrar la información de la persona en consola
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Género:", persona.genero);

//2. Definir el objeto llamado caja

const caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 100,
    fotografias: 20,
    buenEstado: true
};

// Imprimir el objeto entero por consola
console.log("Objeto caja:", caja);

// Imprimir cada propiedad del objeto y que es
console.log(cuadernos);
console.log(typeof cuadernos);
console.log(lapices);
console.log(typeof lapices);
console.log(papel);
console.log(typeof papel);
console.log(fotografias);
console.log(typeof fotografias);
console.log(buenEstado);
console.log(typeof buenEstado);
