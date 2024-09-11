const numero1 = 20;
const numero2 = 40;

/*
1. `Suma (+)`: Suma numero1 y numero2. Muestra el resultado por consola.
2. `Resta (-)`: Resta numero1 y numero2. Muestra el resultado por consola.
3. `Multiplicación (*)`: Multiplica numero1 y numero2. Muestra el resultado por consola.
4. `División (/)`: Divide numero1 y numero2. Muestra el resultado por consola.
5. `Modulo (%)`:  Saca el modulo entre numero2 y numero1. Muestra el resultado por consola.
*/

function sumar(numero1, numero2){
    return numero1 + numero2;
}
console.log(`La suma entre ${numero1} y ${numero2} es: `, sumar(numero1, numero2));

function restar(numero1, numero2){
    return numero1 - numero2;
}
console.log(`La resta entre ${numero1} y ${numero2} es: `, restar(numero1, numero2));

function multi(numero1, numero2){
    return numero1 * numero2;
}
console.log(`La multiplicacion entre ${numero1} y ${numero2} es: `, multi(numero1, numero2));

function div(numero1, numero2){
    return numero1 / numero2;
}
console.log(`La division entre ${numero1} y ${numero2} es: `, div(numero1, numero2));

function modulo(numero1, numero2){
    return numero1 % numero2;
}
console.log(`La division entre ${numero1} y ${numero2} es: `, modulo(numero1, numero2));