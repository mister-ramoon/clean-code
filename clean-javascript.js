// Clase Padre antes de ES6
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return "Hello, my name is " + this.name;
};

// Clase Hija antes de ES6
function Developer(name) {
  this.name = name;
}

Developer.prototype = Object.create(Person.prototype);

Developer.prototype.writeCode = function (coffee) {
  if (coffee) console.log("I am working in a new feature");
  else console.log("I need coffee!");
};

var dev = new Developer("Jorge");
console.log(dev.greet());
dev.writeCode(true); // I am working in a new feature

// Clase Padre con ES6
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

// Clase Hija con ES6
class Developer extends Person {
  constructor(name) {
    super(name);
  }

  writeCode(coffee) {
    coffee
      ? console.log("I am working in a new feature")
      : console.log("I need coffee!");
  }
}

const dev = new Developer("Jorge");
console.log(dev.greet());
dev.writeCode(true); // I am working in a new feature
