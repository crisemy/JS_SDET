// 1. Suma de números pares: Crea un programa que sume todos los números pares del 1 al 50

var sumaNumerosPares = 0

for (i=2; i <=50; i++) {
    if (i % 2 == 0){
        sumaNumerosPares = sumaNumerosPares + i
    }
}
// Sale del loop y muestra el valor
console.log("Ejercicio 1: La suma de los numeros pares en el rango de 1 a 10 es: ", sumaNumerosPares)

/*
// 2. Contador de vocales: Escribe un programa que cuente cuántas vocales hay en una frase ingresada por el usuario.
var vocales = [a, e, i, o, u]
var frase
console.log("Ingrese una frase especifica", frase)

for (i=0; i<5; i++){
    
}
*/

// 3. Buscar en un array: Dado un array de números, crea un programa que encuentre el número más grande en el array.

var NumeroMayor = 0
var NumerosArray = [25,1,56,451,51234,512]

for (i=0; i<5; i++) {
    if (NumeroMayor < NumerosArray[i]) {
        NumeroMayor = NumerosArray[i]
    }
}
console.log("Ejercicio 3: El numero mas grande del Array es: ", NumeroMayor)