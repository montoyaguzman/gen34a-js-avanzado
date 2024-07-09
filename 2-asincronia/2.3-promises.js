/**
 * BLOQUE 4: Promesas
 * Son codigo que al ejecutar se queda pendiente pero con la promesa
 * de finalizar siempre (resolve, o reject)
 */
const isOkPromise = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 validando el pago...');
            // if status === 200
            resolve();
            // if status === 409
            // reject('no se pudo validar la tarjeta');
        }, 0);
    });

}

console.log(' ======== BLOQUE 4 ========');
console.log('1 Dar click en pagar!!');

isOkPromise()
    .then(() => {
        console.log('3 me lo merezco, para eso trabajo!!');
        // more sentences
        // ciclo for
        // call api
        // callPokeApi.then(() => {
        //  callWethearApi().then(() => {
        //  callWethearApi().then(() => {})
        // }) 
        // })
    })
    .then(() => console.log('4 arrepentimiento....'))
    .catch((e) => console.log('error:', e))
    .finally(() => console.log('5 llego el producto..'))

