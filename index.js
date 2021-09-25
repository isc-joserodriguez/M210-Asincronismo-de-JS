function miFuncion() {
    console.log('Hola desde el Timeout');
}

let seg = 8;
const nombreDeReferencia = setTimeout(miFuncion, seg * 1000);

const arrowFuntion = () => {
    console.log('Hola desde la arrow function');
}

setTimeout(arrowFuntion, 1000);

let timerDesconexion = setTimeout(() => {
    console.log('Desconectado!!');
}, 3000);

clearTimeout(timerDesconexion);