/* let arrayFunction = () => 12
let arrayFunction = () => ({ a: 1, b: 2 })
let arrayFunction = () => {
    return 12;
} */


let mensaje = "hola";
let contador = 0;

/* const interval = setInterval(() => {
    contador++;
    console.log(contador, mensaje);
    if(contador>9){
        clearInterval(interval);
    }
}, 200);

clearInterval(interval); */

/*
let test = [12, 13, 14, 15]
const interval = setInterval(() => {
    for (let i = 0; i <= test.length - 1; i++) {
        console.log(test[i]);
        if (test.length == i + 1) {
            clearInterval(interval);
        }
    }
}, 200);
*/

// [1, 2, 3, 4].length === 4


//Ejercicio 1

const imprimirArray = (array) => {
    let contador = 0;

    const interval = setInterval(() => {
        console.log(array[contador]);
        contador++;
        if (array.length == contador) {
            clearInterval(interval);
        }
    }, 1000);
}

imprimirArray([12, 13, 14, 15])