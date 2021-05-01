// Evaluar según los siguientes datos y hacer comentarios sobre ello//
// a) x=3; y=1; z=4; w=0
// b) x=2; y=0,5; z=3; w=0,1
// c) x=VERDADERO; y=FALSO; z=3; w=3
// d) x=FALSO; y=4; z=9; w=8

//========== Expresion (a) ==========//
//====== NO(x MOD 2 = 0) Evaluar ======//
// console.log("Resultado a", );
// console.log("Resultado b", );
// console.log("Resultado c", );
// console.log("Resultado d", );

//========== Expresion (b) ==========//
//====== (x=y) Y ((x>z) O (y>z)) ======//
console.log("Resultado a", "3" == "1" && ("3" > "4" || "1" > "4"));
console.log("Resultado b", "2" == "0,5" && ("2" > "3" || "0.5" > "3"));
console.log("Resultado c", "true" == "false" && ("true" > "3" || "false" > "3"));
console.log("Resultado d", "false" == "4" && ("false" > "9" || "4" > "9"));