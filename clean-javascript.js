// Antes de ES6
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return "Hello, my name is " + this.name;
};

var person = new Person("John");
console.log(person.name); // John
console.log(person.greet()); // Hello, my name is John

// ES6
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello, my name is " + this.name;
  }
}

let person = new Person("John");
console.log(person.name); // John
console.log(person.greet()); // Hello, my name is John
