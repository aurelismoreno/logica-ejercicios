// Ejercicio 1(a): f= a(x+2/y)²
console.log("Ejercicio, 1a", (f = a * Math.pow((x + 2) / y, 2)));

// Ejercicio 1(b): g= y²(x/(z/x)+z)
console.log("Ejercicio, 1b", (g = Math.pow(y, 2) * (x / (z / x + z))));
//x/(z/x+z)

// Ejercicio 1(c): h = w + ((x+y)²/(x+y-z)²) -(a/b)
console.log(
  "Ejercicio, 1c",
  (h = w + Math.pow(x + y, 2) / Math.pow(x + y - z, 2) - a / b)
);

// Ejercicio 1(d): x = w + ()/()
const x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
const x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
