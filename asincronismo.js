let dato = null;

const saludo = () => console.log('Hola');

const mensaje = (funcion) => {
    console.log(
        `Son las: ${new Date().getHours()} horas 
      con ${new Date().getMinutes()} minutos`
    );
    dato = 'Dato importante';
    funcion()
}

const despedida = () => console.log('Tu dato es: ', dato);

saludo();
setTimeout(()=>mensaje(despedida), 3000);
despedida();