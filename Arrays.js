// 1. Función que recibe como parámetro un array de números y retorna la suma de todos los números del array
function sumarArray(numeros) {
    return numeros.reduce((suma, numero) => suma + numero, 0);
};

//Prueba
console.log(sumarArray([1, 2, 3, 4, 5])); // 15

// 2. Función que recibe como parámetro un array de números y retorna el promedio de todos los números del array
function promedioArray(numeros) {
    const suma = sumarArray(numeros);
    return suma / numeros.length;
};

//Prueba
console.log(promedioArray([1, 2, 3, 4, 5])); // 3

// 3. Función que toma un arreglo de strings como parámetro y devuelve un nuevo arreglo con los strings en mayúsculas
function convertirArregloAMayusculas(strings) {
    return strings.map(string => string.toUpperCase());
};

//Prueba
console.log(convertirArregloAMayusculas(["hola", "mundo", "javascript"])); // ["HOLA", "MUNDO", "JAVASCRIPT"]

// 4. Función que toma un arreglo de números como parámetro y devuelve un nuevo arreglo que contenga solo los números pares
function filtrarNumerosPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
};

//Prueba
console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
