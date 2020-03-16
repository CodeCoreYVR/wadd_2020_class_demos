// JavaScript Objects
// Data Types:
// 1. Numbers (Integers, Floats)
// 2. Strings: they can be created using (double quotes "", single quotes '', backtecs ``)

// Data structures
// 1. Arrays
// 2. Objects => Today's lecture
// .
// .

// JS Variables
// Variables are placeholders for all kind of datatypes (strings, numbers, objects, functions, etc...)
// in a language. We can create variables using (const, let) keywords.
// const: Use const if you don't want to reassign your variable anywhere
// down in your code
// ex:
const PI = 3.14;
// PI = 3.14552323; // You can't do that because PI is declared with const

// let: use let if you need to re-assign your variable
// ex:
let fullName = "Alan Johnson";
fullName = "Alan Mark Johnson";

// function add(a, b) {
//     return a + b;
// }

const add = function(a, b) {
  return a + b;
};
// What are objects?
// Objects are one of data structures that are used to store data.
// They are enclosed by curly braces ({}) and they come in key-value pairs
// colon (:) separated

// ex:

// const person = {
//   name: "Hindreen",
//   occupation: "Teacher"
// };

// How do we create them?

const obj = {
  a: 1,
  b: 2,
  c: 5
};

const obj1 = new Object();

// How do we access them (get, set) their properties

// 1. getting and setting objects using dot-notation

const person = {
  name: "John",
  age: 28
};

person.name; // that will give us the person's name property value
person.age; // that will give us the person's age property value

console.log(person.name);
console.log(person.age);

console.log(person);

// set a new property using dot-notation
person.occupation = "Engineer";

console.log(person);

// Q/ A manager asks a desk assistant at his/her company to store each
// guests (name, email, phone, visit-time).

// Use the right data structure (Arrays / Objects) whichever you feel is better
// to save the data

// const person = {
//   name: "Komal",
//   email: "youremail@domain.com",
//   phone: "777 777-7373",
//   "visit-time": "10:00am"
// };
// console.log(person.name);
// console.log(person.email);
// console.log(person.phone);

// const person = [
//   "name",
//   "Komal",
//   "email",
//   "youremail@domain.com",
//   "phone",
//   "777 777-7373",
//   "visit-time",
//   "10:00am"
// ]; // XXXXXXX wrong

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numbers = { "1": 1, "2": 2, "3": 3}; XXXXXXX Wrong

// 2. Getting and setting object using Bracket notation

const person = {
  name: "Komal",
  email: "youremail@domain.com",
  phone: "777 777-7373",
  "visit-time": "10:00am"
};
console.log(person["name"]);
console.log(person["email"]);
console.log(person["phone"]);
console.log(person["visit-time"]);

person["name"] = "Alan";
person["address"] = "123 abc street";

console.log(person);

// The rules for creating each key in an object is the same as the rules
// for creating variables. Keys are always strings wether they are in
// quotes or not

// Accessing Object built-in methods and properties
Object.keys(person); // ["name", "email", "phone", "visit-time"]
Object.getOwnPropertyNames(person); // ["name", "email", "phone", "visit-time"]
Object.values(person); // ["Komal", "youremail@domain.com", "777 777-7373", "10:00am"]

const object = {}; // an empty is just like an empty array but, it uses
// culy braces {}, instead of square brackets []

const helpers = {
  description: "my helper object",
  counters: [1, 3, 4, 5, 6],
  printMe: function() {
    console.log("printing ....");
  }
};

console.log(helpers.description);
console.log(helpers.counters);
console.log(helpers.printMe());

const myArray = [
  1,
  3,
  { a: 2, b: 3 },
  function printMe() {
    console.log("printing...");
  }
];

console.log(myArray[2]); //  { a: 2, b: 3 }
console.log(myArray[3]()); // printing...

const object3 = {
  a: 1,
  b: 2,
  c: { name: "Hano", address: "123 abc street" },
  printMe: function() {
    return "printing...";
  }
};

console.log(object3.c); // { name: 'Hano', address: "123 abc street"}
console.log(object3.printMe()); // printing...

object3.hasOwnProperty("a"); // true
object3.hasOwnProperty("printMe"); // true
object3.hasOwnProperty("aa"); // false

// Assigning & copying objects
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5 };
const obj3 = {};

Object.assign(obj3, obj1); // We are saying assing obj3 to obj1 or we can say
// Object.assign(obj3, obj1, obj2); and that will merge obj1 & obj2 and copy them
// into obj3
console.log(obj3); // { a: 1, b: 2, c: 3 };

// How do we loop through their properties

const person = {
  name: "Komal",
  email: "youremail@domain.com",
  phone: "777 777-7373",
  "visit-time": "10:00am"
};

for (let key in person) {
  console.log(`key: ${key} => value: ${person[key]}`);
}

// Q/ Loop through person object using traditional for loop
// and print key value - pairs of the person object same as above

const keys = Object.keys(person); // ['name', 'email', 'phone', 'visit-time']

for (let i = 0; i < keys.length; i++) {
  console.log(`key: ${keys[i]} => value: ${person[keys[i]]}`);
}

// "this" keyword

// 'this' is a reseved keyword in JavaScript

// what this keyword actually means?
// A real life scenario, imagine you are in a car and you say this car is fast,
// we don't say the car is fast or car is fast, we might say oh God this is so fast.
// In JavaScript when you are inside a function, an object or a class, 'this' refers to them
// there are some exceptions but, we later look at them

// This inside Global Scope (window)

// examples
this.foo = "bar"; // foo property will be added to global object (window) and that's because we are inside the global scope

console.log(this.foo); // bar
console.log(foo); // bar
console.log(window.foo); // bar

// that's  because we are not inside any functions or objects when we refer to 'this'

// Other examples
const person = {
  name: "Roman",
  age: 27,
  occupation: "Engineer",
  //   print: function() {
  //     console.log(`${this.name} is ${this.age} years old`);
  //   }
  // Below is the syntax sugar for the above method
  print() {
    console.log("this: ", this); // this will be equivallent to person object since we call
    // this method with person object
    console.log(
      `${this.name} is ${this.age} years old and his occupation is ${this.occupation}`
    );
    //   console.log(`${person.name} is ${person.age} years old`);
  }
};

person.print(); // since we are calling the (print method) with person on the left-side so,
// this will be refering to person object inside print method

// this outside objects again

this.name = "Aryan";
this.age = 33;

const printMe = function() {
  console.log(`${this.name} is ${this.age} years old`);
};

printMe(); // Aryan is 33 years old
// this keyword will refer to global (window) object

// Count and unique?
/*
Write a script that takes an array of integers and return an object with the count of each 
number. Next, write a script that returns true if all elements of an array are unique and false
otherwise
*/

// part 1:
const array = [1, 2, 3, 4, 5, 6, 2, 3, 1]; // length 9

const arrayToObject = array => {
  // type your code here to return an object of that array
  const outputObject = {};
  for (let i = 0; i < array.length; i++) {
    if (outputObject.hasOwnProperty(array[i])) {
      // (outputObject.hasOwnProperty('1')) {
      outputObject[array[i]] += 1;
      // outputObject['1'] = outputObject['1'] + 1;
    } else {
      outputObject[array[i]] = 1;
      //   outputObject['1'] = 1;
    }
  }

  return outputObject;
};

// so for the above array, you should get back the following object
arrayToObject(array); // { "1": 2, "2": 2, "3": 2, "4": 1, "5": 1 };

// part 2:
const isUniqueArray = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(`array[${i}]: ${array[i]} === array[${j}]: ${array[j]}`);
      if (array[i] === array[j]) {
        return false;
      }
    }
  }

  return true;
};
//    i + 1
// i    j   array[i]    array[j]
// -----------------------------
// 0    1       1           3
//      2       1           4
//      3       1           3
//      4       1           4

// 1    2       3           4
//      3       3           3

const arr1 = [1, 3, 4, 3, 4];
isUniqueArray(arr1); // false

const arr2 = [1, 2, 3, 4];
isUniqueArray(arr2); // true
