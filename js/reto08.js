//Diseña el pseudocódigo necesario para sumar los N primeros impares. Realizar después uno que haga lo mismo con los pares y otro con los múltiplos de 3. Crea un menú para ello.


//DECLARACIONES

let contador = prompt("¿Cuantos números quieres que sume?");
    contador = parseInt(contador)
let suma = 0;

    switch(prompt("Introduce 'pares' si quieres que sume pares. 'impares' si quieres que sume impares y 'multiplos' si quieres que sume multiplos de 3")){

    //IMPARES

        case "impares":

            for (let index = 1; index <= (contador+2); index += 2){
                suma = suma + index
            };

            console.log(suma);

            break;

    //PARES

        case "pares":
            
            for (let index = 2; index < (contador+2); index += 2) {
                suma = suma + index
            };

            console.log(suma);

            break;
            
    //MULTIPLOS DE 3

        case "multiplos":

            for (let index = 3; index < (contador*4); index += 3){
                suma = suma + index
            }

            console.log(suma);

            break;
        }

                