// Mostar por pantalla la potencia A^B teclado sin usar eloperador (*).
let base = process.argv[2];
let exponente = process.argv[3];

let resultado = Math.pow(base, exponente);

console.log("Resultado", resultado);
