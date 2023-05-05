// Ámbito global
let greeting = "Hello World";

function greet() {
  console.log(greeting);
}

greet(); // Hello World

// Ámbito local o de función
function greet() {
  let greeting = "Hello World";
  console.log("Saludo desde la función", greeting);
}

greet(); // Hello World
console.log(greeting);

// Ámbito de bloque
{
  let greeting = "Hello World";
  var lang = "English";

  console.log(greeting); // Hello World
}

console.log(lang); // English
console.log(greeting); // ReferenceError: greeting is not defined

// Ámbito estático o lexico
const age = 20;

function printAge() {
  console.log(age);
}

function mainApp() {
  const age = 30;
  printAge();
}

mainApp(); // 20

// Hoisting
greet(); // Hello World

function greet() {
  let greeting = "Hello World";
  console.log(greeting);
}

var greed = "Hello";

(function () {
  var greed;
  console.log(greed);
  var greed = "Hi";
  console.log(greed);
})();
