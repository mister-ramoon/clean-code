// Parameters: number
function getDouble(number) {
  return number * 2;
}

// Arguments: 3
getDouble(3); // 6

// Default parameters
function greet(person = "stranger") {
  return `Hello, ${person}!`;
}

greet(); // "Hello, stranger!"
greet("John"); // "Hello, John!"

// Rest parameters
function add(...args) {
  console.log(args.reduce((prev, current) => prev + current, 0));
}

add(1, 2, 3, 4, 5); // 15

// Spread operator
const course = {
  title: "JavaScript",
  content: "Learn JavaScript",
};

const courseCloned = Object.assign({}, course);
const courseClonedSpread = { ...course };
console.log(courseClonedSpread); // { title: "JavaScript", content: "Learn JavaScript" }

const numbers = [1, 2, 3, 4, 5];

const numbersCloned = numbers.slice();
const numbersClonedSpread = [...numbers];

const numberrsA = [1, 2, 3, 4, 5];
const numberrsB = [6, 7, 8, 9, 10];

const numbersConcat = numberrsA.concat(numberrsB);
const numbersConcatSpread = [...numberrsA, ...numberrsB];
