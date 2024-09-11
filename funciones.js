// 1. Función que recibe un string y retorna el string en mayúsculas
function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
};
//Prueba
console.log(convertirAMayusculas("mayusculas"));

// 2. Función que recibe un string y retorna el string en minúsculas
function convertirAMinusculas(cadena) {
    return cadena.toLowerCase();
};
//Prueba
console.log(convertirAMinusculas("MINISCULAS"));

// 3. Función que recibe como parámetro 2 números y los reste
function restar(num1, num2) {
    return num1 - num2;
};
//Pruebas
console.log(restar(10, 5));

// 4. Función que recibe como parámetro 2 números y los divida
function div(num1, num2) {
    if (num2 === 0) {
        return "No se puede dividir por cero.";
    }
    return num1 / num2;
};
//Prueba
console.log(div(10, 2));

// 5. Función que recibe como parámetro 2 números y los multiplique
function multi(num1, num2) {
    return num1 * num2;
};
//Prueba
console.log(multi(5, 2));


// 6. Función que recibe un string y devuelve la longitud del string
function obtenerLongitud(cadena) {
    return cadena.length;
};

//Prueba
console.log(obtenerLongitud("Prueba de longitud de un string")); //Deberia dar 31