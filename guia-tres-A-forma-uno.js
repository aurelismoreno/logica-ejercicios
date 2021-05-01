// Leer cinco números por teclado y determinar cual es el
// mayor y cual es el menor mostrándolo por pantalla.

process.argv.forEach((val, index, array) => {
  console.log(`${index}: ${val}`);
});
console.log("===================================");

if (
  process.argv[2] >= process.argv[3] &&
  process.argv[2] >= process.argv[4] &&
  process.argv[2] >= process.argv[5] &&
  process.argv[2] >= process.argv[6]
) {
  console.error("El mayor es : ", process.argv[2]);
  process.exit(1);
} else {
  if (
    process.argv[3] >= process.argv[2] &&
    process.argv[3] >= process.argv[4] &&
    process.argv[3] >= process.argv[5] &&
    process.argv[3] >= process.argv[6]
  ) {
    console.error("El mayor es : ", process.argv[3]);
    process.exit(1);
  } else {
    if (
      process.argv[4] >= process.argv[2] &&
      process.argv[4] >= process.argv[3] &&
      process.argv[4] >= process.argv[5] &&
      process.argv[4] >= process.argv[6]
    ) {
      console.error("El mayor es : ", process.argv[4]);
      process.exit(1);
    } else {
      if (
        process.argv[5] >= process.argv[2] &&
        process.argv[5] >= process.argv[3] &&
        process.argv[5] >= process.argv[4] &&
        process.argv[5] >= process.argv[6]
      ) {
        console.error("El mayor es : ", process.argv[5]);
        process.exit(1);
      } else {
        if (
          process.argv[6] >= process.argv[2] &&
          process.argv[6] >= process.argv[3] &&
          process.argv[6] >= process.argv[4] &&
          process.argv[6] >= process.argv[5]
        ) {
          console.error("El mayor es : ", process.argv[6]);
          process.exit(1);
        }
      }
    }
  }
}
// const maximo = Math.max(1, 2, 3, 4,5, 10);

// console.log('max:', maximo)