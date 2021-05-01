// Leer cinco números por teclado y determinar cual es el
// mayor y cual es el menor mostrándolo por pantalla.

console.log('process.argv', process.argv);
// const n1 = process.argv[2];
// const n2 = process.argv[3];
// const n3 = process.argv[4];
// const n4 = process.argv[5];
// const n5 = process.argv[6];

const n1 = 5886;
const n2 = 9994;
const n3 = 9648;
const n4 = 3859;
const n5 = 4459;

const array = [n1,n2,n3,n4,n5];

for (let i = 0; i < array.length; i++) {
    
  const actual = array[i];
  
  // let c = 0;
  let sw = true;

  for (let j = 0; j < array.length; j++) {
    const actualdos = array[j];
    
    // if (actual > actualdos && i != j) {
    //   c++;
    // }
    
    if (actual <= actualdos && i!=j) {
        sw =false
    }
  }
//   if (c === array.length - 1) {
//     console.log("Mayor:", actual);
//   }
  if (sw) {
    console.log("Mayor:", actual);
  }
}
//

// if (n1 > n2 && n1 >n3 && n1>n4 && n1>n5){
//     console.log('Mayor:', n1);
// }else{
//   if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
//     console.log("Mayor:", n2);
//   } else {
//     if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
//       console.log("Mayor:", n3);
//     } else {
//       if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
//         console.log("Mayor:", n4);
//       } else {
//         if (n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4) {
//           console.log("Mayor:", n5);
//         }
//       }
//     }
//   }
// }