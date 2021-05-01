// let f = 0;
// let a = 0
// let fraccion = Math.pow(base, exponente);
// let base = numerador / denominador;
// let numerador = x + 2;
// let x = 0;
// let denominador = 0;
// let f = 0;
// let a = 0
// console.log('n1', n1[]);

// const n1 = process.argv[2];
// const n2 = process.argv[3];
// const n3 = process.argv[4];
// const n4 = process.argv[5];
// const n5 = process.argv[6];

// if (process.argv[2] && process.argv[2] === '-c') {
//   console.log('After \'while, Crocodile!');
// } else {

//     console.log('See ya later, Alligator!');
// }

// console.log("El resultado de la suma es " + sumar(process));

// function sumar(process) {
//   var result = 0;
//   for (i = 2; i < process.argv.length; i++) {
//     result += Number(process.argv[i]);
//   }
//   return result;
// }

// console.log(mo.suma(5,3));
// console.log(mo.resta(5,3));
// console.log(mo.multiplicacion(5,3));
// console.log(mo.division(5,3));
// console.log("El resultado de la multiplicacion es "+ multiplicar(process));

// function multiplicar(process){
// 	var result = 1;
// 	for(i=2; i < process.argv.length; i++){
// 		result *= Number(process.argv[i]);
// 	}
// 	return result;
// }

//===comentario===//

// console.log("process.argv", process.argv);
// const n1 = process.argv[2];
// const n2 = process.argv[3];
// const n3 = process.argv[4];
// const n4 = process.argv[5];
// const n5 = process.argv[6];

// const f = a * Math.pow((1 + 2) / 1);

// console.log('Resultado',f)

// Ejercicio 1 (a) : f= a(x+2/y)²
const a = 2;
const numerador = 4 + 4;
const denominador = 2;
const base = numerador / denominador;
const exponente = 2;
console.log("Ejercicio, 1a", a * Math.pow(base, exponente));

//Ejercicio 1(b): g= y²(x/(z/x)+z)
const y = Math.pow(2, 2);
const x = 4;
const z = 8;
console.log("Ejercicio, 1b", y * (x / (z / x) + z));

//Ejercicio 1(c): h = w + ((x+y)²/(x+y-z)²) -(a/b)

const w = 4;
const x = 6;
const y = 8;
const z = 10;
const a = 12;
const b = 14;
const c = x + y;

console.log(
  "Ejercicio, 1c",
  w + Math.pow(c, 2) / Math.pow(c - z, 2) - a / b
);

//Ejercicio 1(d): x = w + ()/()
const x1 = (-b + Math.sqrt(d)) / (2 * a);
const x2 = (-b - Math.sqrt(d)) / (2 * a);

// a) x=3; y=1; z=4; w=0

// (x=y) Y ((x>z) O (y>z))

// (3=1) Y ((3>4) O (1>4))

// false Y (false O false)
// false Y false
// verdadero
////////////////////////////////////////////////////////

// // console.log("El resultado de la suma es " + sumar(process));

// // function mayorMenor(process) {
// //   const mayor = 0;
// //   const menor = 0;
// //   const result = 0;

// //   for (i = 2; i < process.argv.length; i++) {
// //     result += Number(process.argv[i]);
// //   }
// //   return result;
// // }

// const a = 0;
// const b = 0;
// const c = 0;
// const d = 0;
// const e = 0;

// if (a > b && a > c && a > d && a > e) {
//   mayor = mayor + 1;
// } else {
// }
// // Escribir "escibe el valor de a"
// Leer a
// Escribir "escibe el valor de b"
// Leer b
// Escribir "escibe el valor de c"
// Leer c
// neg<--b
// raizcua<-(b^2-4*a*c)^0.5
// Si raizcua<=0 Entonces
//    Escribir "La ecuacion no se puede resolver"
// Sino
//    totalx1<-(NEG+Raizcua)/(2*a)
//    totalx2<-(NEG-Raizcua)/(2*a)
//    Escribir Totalx1
//    Escribir Totalx2
// FinSi
// FinProceso

// //

// Proceso ejercicio_1
//    Escribir "Introduce el valor de A"
//    Leer A
//    Escribir "Introduce el valor de B"
//    Leer B
//    C<-A
//    A<-B
//    B<-C
//    Escribir "A vale " A " y B vale " B
// FinProceso
// *******************************
// console.log('process.argv', process.argv);
// const n1 = process.argv[2];
// const n2 = process.argv[3];
// const n3 = process.argv[4];
// const n4 = process.argv[5];
// const n5 = process.argv[6];

// function getMaxOfArray(process) {

//     return Math.max(null, process.argv.length);
//   }

// console.log("El numero mayor es " + getMaxOfArray(process));

// let n = 5;

// for (let i = 1; i <= 5; i++) {

//   console.log(`${n} * ${i} = ${n * i}`);
// }

// const maximo = Math.max(1, 2, 3, 4,5);

// console.log('El maximo es :',maximo)

// console.log("Escribe tu nombre");
// const stdin = process.openStdin();

// stdin.addListener("data", function (d) {
//   console.log("Tu nombre es: " + d.toString().trim());
// });

// const n1 = process.argv[2];
// const n2 = process.argv[3];
// const n3 = process.argv[4];
// const n4 = process.argv[5];
// const n5 = process.argv[6];

// if ((process.argv[2] = 4) >= (process.argv[3] = 5) ) {
//   console.log('el mayor es:',process.argv );
// } else {

//     console.log('See ya later, Alligator!');
// }

// imprime process.argv
// process.argv.forEach(function (valor, indice, arreglo) {
//     console.log(indice + ': ' + valor);
//   });
// Puedes acceder a él usando:

// const args = process.argv.slice(2);
// args[0];
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// })

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//

// process.argv[2] = process.argv[2] || "Node.js funcionando desde C9.io";

// console.log("===================================");
// console.log("Id: " + process.pid);
// console.log("Título: " + process.title);
// console.log("Ruta: " + process.execPath);
// console.log("Directorio Actual: " + process.cwd());
// console.log("Node Versión: " + process.version);
// console.log("Plataforma: " + process.platform);
// console.log("Arquitectura: " + process.arch);
// console.log("Tiempo activo: " + process.uptime());
// console.log("Versiones Dependencias: ");

