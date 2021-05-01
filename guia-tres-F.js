// Mostrar por pantalla el factorial de un número leído por teclado.

let n = process.argv[2];

let resultado = 1;

for (let i = 1; i <= n; i++) {
  resultado = resultado * i;
}

console.log("Factorial", resultado);
