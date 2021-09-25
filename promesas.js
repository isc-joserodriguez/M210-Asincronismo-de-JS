/* let array = [];

const promesa = new Promise((FuncionResuleta, FuncionRechazada) => {
    //Puedo hacer todo lo que quiera

    //Lo importante es resolver o rechazar la promesa.

    if (array.length === 0) {
        FuncionRechazada("El array no está vacío");
    } else {
        FuncionResuleta("Parametro de la funcionResuelta");
    }
});

promesa.then((parametroDeLaFuncionResuelta) => {
    console.log(parametroDeLaFuncionResuelta);
}).catch((error) => {
    console.log(error);
}) */



let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) resolve("Ruta del archivo");
        reject("Error de la promesa");
    }, 500);
});

/* promesa.then((datoLeido) => console.log(datoLeido))
    .catch((error) => console.log(error)); */

async function nombre() {
    try {
        let resultado = null;
        console.log('Abriendo Archivo:');
        resultado = await promesa;
        console.log("Mostrar el archivo en la ruta " + resultado);
        let a = variableX;
    } catch (e) {
        console.log("Algo salió mal");
    }
    console.log('terminó mi ejecucion');
}

/* 
const miFuncion = async () => {
    console.log('inicia promesa');
    let resultado = await promesa;
    console.log("Se leyó: " + resultado);
} 
*/

nombre();