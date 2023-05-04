// Anterior a ES6
var name = "Javier";

// JavaScript Moderno
let name = "Juan";
const PI = 3.1416;

// Uso de var
var age = 20;

{
  console.log("Valor dentro del bloque: ", age); // 20
  var age = 30;
}
console.log("Valor fuera del bloque: ", age); // 30
age = 40;
console.log("Valor cambiado: ", age); // 40

// Uso de let
let age = 20;

{
  console.log("Valor dentro del bloque: ", age); // Error
  let age = 30;
}

console.log("Valor fuera del bloque: ", age); // 20
age = 40;
console.log("Valor cambiado: ", age); // 40

// Uso de const
const PI_ejemplo = 3.1416;
PI_ejemplo = 3.14; // Error
