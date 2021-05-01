// Leer una medida en pies muestre su equivalente en pulgadas, centímetros o metros, según indique el usuarios.

const pies = process.argv[2];
// 1 pie equivale a 12 pulgadas
// 1 pies equivale a 30.48 centimetros
// 1 pie equivale a 0.3048 metros

const piesValor = pies;
const convertirPulgadas = pies * 12;
const convertirCentimetros = pies * 30.48;
const convertirMetros = pies * 0.3048;

console.log("Pies a pulgadas", convertirPulgadas);
console.log("Pies a centimetro", convertirCentimetros);
console.log("Pies a metros", convertirMetros);
