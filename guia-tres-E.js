// Leer por teclado la duración de una llamada en segundos y
// mostrar por pantalla el costo. El costo de la llamada será
// de 0,5 Bs. más 0,2 Bs. Por cada minuto extra después del 3ero.

let duracion = process.argv[2];

const costo = 0.5 ;
const costoAdicional = costo + 0.2;
let resultado = 0;

if (duracion <= 3) {
  resultado = duracion * costo;
} else {
  resultado = duracion * costoAdicional;
}

console.log("Costo de llamada S/", resultado);
