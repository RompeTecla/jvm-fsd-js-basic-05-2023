//script que defina el numero de sumas elija el usuario y sume los numero que le introduzca el usuario

let suma = 0;
let veces = prompt("¿Cuantos numero quieres sumar?");

for (cont=0; cont<veces; cont++){
    let numero = Number (prompt("Introduce numeros a sumar"));
    suma = suma + numero
}
console.log("El resultado de la suma es: " +suma);
alert("El resultado de la suma es: " +suma);