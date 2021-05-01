// Leer dos número teclado e intercambie sus valores sin utilizar una variable temporal.
let n1 = process.argv[2];
let n2= process.argv[3];


console.log("Antes de intercambiar. Primera: %d, Segunda: %d", n1, n2);
n1 = n1 + n2;
n2 = n1 - n2;
n1 = n1 - n2;
console.log("Después de intercambiar. Primera: %d, Segunda: %d", n1, n2);
