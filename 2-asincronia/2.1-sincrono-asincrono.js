/**
 * BLOQUE 1: Codigo sincrono
 * Es cuando cada linea se ejecuta en el orden en que esta escrita
 * 
 */
// console.log(' ======== BLOQUE 1 ========');
// console.log('1 Dar click en pagar!!');

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     console.log('2 validando el pago...');
// }
// console.log('3 me lo merezco, para eso trabajo!!');

/**
 * BLOQUE 2: Codigo asincrono
 * Cuando JS tiene que esperar una respuesta de algo que esta fuera de su control (motor)
 * tiende a formarlo y ejecutarlo al final
 */
console.log(' ======== BLOQUE 2 ========');
console.log('1 Dar click en pagar!!');

setTimeout(() => {
    console.log('2 validando el pago...');
}, 0);

console.log('3 me lo merezco, para eso trabajo!!');