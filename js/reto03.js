//script que amacena 3 numeros en 3 variables A,B y C y debe decidir cual es el numero mayor y cual es el numero menor.

let A = Number (prompt("Introduce el 1º número"))
let B = Number (prompt("Introduce el 2º número"))
let C = Number (prompt("Introduce el 3º número"))



if (A>B&&A>C) {
    console.log("A es mayor")
    alert("A es mayor")
    if (B>C) {
        console.log("C es menor")
        alert("C es menor")
    }
    else {
        console.log("B es menor")
        alert("B es menor")
    }  
}

else if (B>A&&B>C) {
    console.log("B es mayor")
    alert("B es mayor")
    if (A>C) {
        console.log("C es menor")
        alert("C es menor")        
    }
    else {
        console.log("A es menor")
        alert("A es menor")
    }
}

else if (C>A&&C>B) {
    console.log("C es mayor")
    alert("C es mayor")
    if (A>B) {
        console.log("B es menor")
        alert("B es menor")
    }
    else {
        console.log("A es menor")
        alert("A es menor")
    }
}

else {
    console.log("los tres son iguales")
    alert("los tres son iguales")
}
