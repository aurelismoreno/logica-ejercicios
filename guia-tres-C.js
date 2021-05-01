// Leer por teclado los coeficientes a, b y c de un ecuación
// de segundo grado y proceda a mostrar por pantalla sus raíces.

const a = process.argv[2];
const b = process.argv[3];
const c = process.argv[4];

const x1 = (-b + (Math.sqrt(Math.pow(b, 2)) - 4 * a * c)) / (2 * a);
const x2 = (-b - (Math.sqrt(Math.pow(b, 2)) - 4 * a * c)) / (2 * a);

console.log("Raiz negativa", x1);
console.log("Raiz positiva", x2);

