/**
 * BLOQUE 3: Callbacks
 * Es una funcion que se pasa como parametro a otra funcion
 */
const isOk = (finalStep) => {
    setTimeout(() => {
        console.log('2 validando el pago...');
        finalStep();
    }, 0);
}

const finalStep = () => {
    console.log('3 me lo merezco, para eso trabajo!!');
}

const validatePayment = (isOk, finalStep) => {
    isOk(finalStep);
}

console.log(' ======== BLOQUE 3 ========');
console.log('1 Dar click en pagar!!');
validatePayment(isOk, finalStep);

