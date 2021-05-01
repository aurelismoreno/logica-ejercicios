// Leer cinco números por teclado y determinar cual es el
// mayor y cual es el menor mostrándolo por pantalla.

const n1 = process.argv[2];
const n2 = process.argv[3];
const n3 = process.argv[4];
const n4 = process.argv[5];
const n5 = process.argv[6];

  const array = [n1, n2, n3, n4, n5];
  let mayor = array[0];

  for (let i = 0; i < array.length; i++) {
    const actual = array[i];

    if (actual > mayor) {
      mayor = actual;
    }
  }

  let menor = array[0];


  for (let i = 0; i < array.length; i++) {
    const actual = array[i];

    if (actual < menor) {
      menor = actual;
    }
  }
console.log("El numero mayor es :", mayor);
console.log("El numero menor es :", menor);
