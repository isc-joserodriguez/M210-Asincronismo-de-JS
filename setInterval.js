/* let arrayFunction = () => 12
let arrayFunction = () => ({ a: 1, b: 2 })
let arrayFunction = () => {
    return 12;
} */


let mensaje = "hola";
let contador = 0;

const interval = setInterval(() => {
    contador++;
    console.log(contador, mensaje);
    if(contador>9){
        clearInterval(interval);
    }
}, 200);

clearInterval(interval);