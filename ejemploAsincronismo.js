let array = [1, 2, 3];

function leyendo() {
    setTimeout(() => {
        console.log(array);
    }, 5000);
}

function leer(functionParam) {
    functionParam();
}   

leer(leyendo);