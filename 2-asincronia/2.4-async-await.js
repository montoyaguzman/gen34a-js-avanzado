/**
 * BLOQUE 5: Promesas (asyn / await)
 * async es una keyword que permite que una funcion devuelva una promesa y que dentro
 * de la misma funcionon se pueda usar el keyword "await"
 * await es la forma en que se controla la asincronia, el codigo que este enfrente es esperado
 */
const isOkPromise = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 validando el pago...');
            // if status === 200
            // resolve();
            // if status === 409
            reject('no se pudo validar la tarjeta');
        }, 0);
    });

}

async function main() {
    console.log(' ======== BLOQUE 4 ========');
    console.log('1 Dar click en pagar!!');

    try {
        await isOkPromise();
        // await pokeApi()
        // await wetheatApi()
        console.log('3 me lo merezco, para eso trabajo!!');
        console.log('4 arrepentimiento....');
        console.log('5 llego el producto..');
    } catch (e) {
        console.log('error: ', e)
    }

}

main();


