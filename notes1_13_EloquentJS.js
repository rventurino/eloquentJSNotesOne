/* FUTURE ME: 

Review and understand the code that is written below, this is important because it is about modules, which evidently are a very large portion of Javascript.

*/

//Until 2015 you had to improvise modules like so
/* This is a module for going between day names and numbers
 */
const weekDay = (function () {
  const names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return {
    name(number) {
      return names[number];
    },
    number(name) {
      return names.indexOf(name);
    },
  };
})();

console.log(weekDay.number("Wednesday"));

/*
This style of modules provides isolation, to a certain degree, but it does not declare dependencies. Instead, it just puts its interface into the global scope and expects its dependencies, if any, to do the same.

(Page 170). 

Example:
*/
console.log(weekDay.name(weekDay.number("Sunday")));
//Sunday
//EVALUATING DATA AS CODE

const x = 1;
function evalAndReturnX(code) {
  eval(code);
  return x;
}

console.log(evalAndReturnX("var x = 2"));
//2
console.log(x); // this is why eval sucks

//A less scary way of interpreting dataa as code is to use the Function constructor, which takes two arguments: A string ontaint a comma separatwed list of arg names an d a string containing the function body

let plusOne = Function("n", "return n + 1");
console.log(plusOne(4));
//

//Packages are chunks of code which can be installed and distributed
//NPM is both a service where you can share packages and a program bundled with Node that helps you install and manage them
/*
 **************************************
 **************************************
 *******************Chapter 10: MODULES
 **************************************
 **************************************
 **************************************


function parseINI(string) {
  // Start with an object to hold the top-level fields
  let result = {};
  let section = result;
  string.split(/\r?\n/).forEach((line) => {
    let match;
    if ((match = line.match(/^(\w+)=(.*)$/))) {
      section[match[1]] = match[2];
    } else if ((match = line.match(/^\[(.*)\]$/))) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?$/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.");
    }
  });
  return result;
}
console.log(parseINI(` name=Vasilis [address] city=Tessaloniki`));
// → {name: "Vasilis", address: {city: "Tessaloniki"}}

//The exec method will return null if no match was found and return an object with info about the match otherwise
//This is as opposed to .test which returns a boolean value for if it found a match
/*
let cartoonCrying = /boo+(hoo+)+/i;
let cries = console.log(cartoonCrying.exec("Boohoooohoohooo"));
/*
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

/*
function toCamelCase(str) {}

toCamelCase("the_stealth_warrior");

/*
console.log(/'\d+'/.test("'123'"));

//REPEATING PARTS OF A PATTERN

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));

console.log(/[0123456789]/.test("in 1992")); // → true
console.log(/[0-9]/.test("in 1992")); // → true

//regex allows us to express more complex patterns
//Sets of characters

console.log(/abc/.test("abcde"));

console.log(/abc/.test("abxde"));

//TESTING FOR MATCHES ((( ABOVE )))

//regex can either be constructed or written as a literal
let re1 = new RegExp("abc");
let re2 = /abc/;

let eighteenPlus = /eighteen\+/;

/***************************************
 **************************************
 ********Chapter 9: Regular expressions
 **************************************
 **************************************
 **************************************
Regular expressions are a way to express patterns in string data
They are both terribly awkward and incredibly useful

 
*/

/*
function primitiveMultiply(num1, num2) {
  for (;;) {
    try {
      let chance = Math.floor(Math.random() * 101);
      if (chance <= 20) {
        return num1 * num2;
      } else {
        throw MultiplicatorUnitFailure;
      }
    } catch (err) {
      console.log("ERROR ");
    }
  }
}
console.log(primitiveMultiply(10, 5));
/*
The for (;;) construct is a way to intentionally create a loop that doesn’t terminate on its own.

(Page 139). 
*/
/*
for (;;) {
  console.log("YO");
}

/*
//Below: Exceptions
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid Direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }L
}

try {
  console.log("You see,", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}

/*
function promptNumber(question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null;
  else return result;
}

console.log(promptNumber("How many trees do you see?"));
/*TESTS usually take the form of little labeled programs which  verify some aspect of your code. For example, a set of tests for the toUpperCase method may look a bit like the code below. */
/*
function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);
}
test("convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO";
});
test("convert Greek text to uppercase", () => {
  return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});
test("don't convert case-less characters", () => {
  return "ࢎ࠶߈ఆ௷".toUpperCase() == "ࢎ࠶߈ఆ௷";
});

/*
The below code calls a constructor without the new keyword, therefore "this" will not refer to a newly constructed object...
*/
/*
"use strict"; //mitigates the issue by throwing an uncaught type error
function Person(name) {
  this.name = name;
}
let ferdinand = Person("Ferdinand"); //oops
console.log(name);

/*
function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("HAPPY HAPPY ");
  }
}

canYouSpotTheProblem();
//referenceerror: counter isn't defined

//StrictMode
/*
 **************************************
 **************************************
 ********Chapter 8: Debugging *********
 **************************************
 **************************************
 **************************************
 */
/*
const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

/*

The array of strings isn’t very easy to work with. What we’re interested in is the destinations that we can reach from a given place.

*/
/*
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

/*
Village state: the state of the robot's place in the village, where it needs to go.
move method: checks whether there is a road going from the current location to the destination, and if not it will return the current state because it can't move
*/
/*
let first = new VillageState("Post Office", [
  { place: "Post Office", address: "Alice's House" },
]);
let next = first.move("Alice's House");

console.log(next.place);

console.log(next.parcels);

console.log(first.place);

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}
/*
A delivery robot looks at the world and decides in which direction it wants to move. As such, we could say that a robot is a function that takes a VillageState object and returns the name of a nearby place.
*/
/*
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}
function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

runRobot(VillageState.random(), randomRobot);
/*
 **************************************
 **************************************
 *****Chapter 7: Project: A Robot *****
 **************************************
 **************************************
 **************************************
 */

/*
class Group {
  constructor(grouper) {
    this.grouper = grouper;
  }

  add(element) {
    this.grouper.push(element);
  }

  delete(element) {
    if (this.grouper.includes(element)) {
      this.grouper.delete(this.grouper[this.grouper.indexOf(element)]);
      return true;
    } else return false;
  }
}

/*
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celsius);

/*
function XO(str) {
  let OStr = "";
  let XStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "x" || str.charAt(i) === "X") {
      XStr += str.charAt(i);
    } else if (str.charAt(i) === "o" || str.charAt(i) === "O") {
      OStr += str.charAt(i);
    }
  }
  if (XStr.length === OStr.length) {
    return true;
  } else return false;
}
console.log(XO("ooxx"));

/*
function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

/*
function minValue(values) {
  values.sort();
  let set = new Set(values);
  let data = "";
  set.forEach((element) => {
    data += element;
  });
  return parseInt(data);
}
minValue([4, 7, 5, 7]);
/*
//Let’s implement an iterable data structure. We’ll build a matrix class, acting as a two-dimensional array.

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }
  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix){
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next(){
    if(this.y == this.matrix.height) return {done: true};

    let value = {x: this.x,
    y: this.y,
  value: this.matrix.get(this.x, this.y)}
  }
}
/*
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}

let ages = {
  Boris: 39,
  Liang: 22,
  Julia: 62,
};
/*
console.log(`Julia is ${ages["Julia"]}`);

console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true

//MAPS

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

let object = new (class {
  getWord() {
    return "hello";
  }
})();
console.log(object.getWord());

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
//Polymorphism: (below):
Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};
console.log(String(blackRabbit)); // → a black rabbit
// Left off on page 102, section CLASS NOTATION
/*
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("Black");

blackRabbit.speak("Hi there");

//CLASS NOTATION
/*
console.log(Object.getPrototypeOf(Math.max) == Function.prototype); // → true
console.log(Object.getPrototypeOf([]) == Array.prototype); // → true

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!"); // → The killer rabbit says 'SKREEEE!'

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

console.log(makeRabbit("blue"));

function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("WEIRDO");
console.log(weirdRabbit.type);

/*
console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null

let empty = {};
console.log(empty.toString);
console.log(empty.toString());

//PROTOTYPES

/*
let rabbit = {};
rabbit.speak = function (line) {
  console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive");

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("OH MY EARS AND WHISKERS, HOW LATE IT'S GETTIN NIGGAS");
hungryRabbit.speak("I could use a beer right now");

/*
function multiplier(x, factor) {
  return function (x) {
    return x * factor;
  };
}

let doubler = multiplier(2);

function setup() {}
//higher order functions for arrays in JS include: map(), sort(), filter(), reduce()
// ^^^ HIGHER ORDER FUNCTIONS ^^^ FOLLOWING WITH A YT TUTORIAL, BOOK LESSON HAD TOO MANY DEPENDANCIES AND WAS SUPER DUPER BORING

//Arrow functions https://www.youtube.com/watch?v=mrYMzpbFz18
//https://www.youtube.com/watch?v=H4awPsyugS0

// → [{name: "Adlam", …}, …]

/*
function unless(test, then) {
  if (!test) then();
}
repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
}); // → 0 is even // → 2 is even

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);

function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);

let labels = [];
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);

/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}
repeatLog(22);
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

/*
let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  console.log("Inside while loop total = " + total);
  count += 1;
}
console.log(total);

/* In mathematics and computer science, a higher-order function is a function that does at least one of the following: takes one or more functions as arguments (i.e. procedural parameters), returns a function as its result.
/*
 **************************************
 **************************************
 ****Chapter 5: objects and arrays*****
 **************************************
 **************************************
 **************************************
 */

/*
JSON looks similar to JavaScript’s way of writing arrays and objects, with a few restrictions. All property names have to be surrounded by double quotes, and only simple data expressions are allowed—no function calls, bindings, or anything that involves actual computation. Comments are not allowed in JSON.

(Page 78). 
/*
If we want a whole random number instead of a fractional one, we can use Math.floor (which rounds down to the nearest whole number) on the result of Math.random. 
*/
//console.log(Math.floor(Math.random() * 10)); // → 2

/*

console.log(Math.random());

function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}
console.log(randomPointOnCircle(2));

// → {x: 0.3667, y: 1.966}

// ^^^ the math object ^^^

/*
let numbers = [5, 1, 7];
console.log(max(...numbers));
//7
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
//9

// ^^^ REST PARAMETERS ^^^

/*
console.log("coconuts".slice(4, 7)); // → nut
console.log("coconut".indexOf("u")); // → 5
console.log(" okay \n ");
console.log(" okay \n ".trim());

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
console.log(words.join(". "));
console.log("LA".repeat(3));

let string = "abc";
console.log(string.length); // → 3
console.log(string[1]); // → b

//STRINGS ^^
/*
let journal = [];
function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth",
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
console.log(day1.squirrel);
/*
 **************************************
 **************************************
 ****Chapter 4: objects and arrays*****
 **************************************
 **************************************
 **************************************
 */
/*
let a = 222;
let b = 12;

function getMin(a, b) {
  return Math.min(a, b);
}

console.log(getMin(a, b));

/*
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
//RECURSION HELL YEAH
/*
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1()); // → 1
console.log(wrap2()); // → 2

//Closure
/*
function minus(a, b) {
  if (b === undefined) {
    return -a;
  } else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));
/*
//javascript don't care about arguments yo
function square(x) {
  return x * x;
}
console.log(square(4, true, "hedgehog"));

//OPTIONAL ARGS

/*
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first");

// ^^^ BREAKY >:-)
/*
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

//The Call Stack

/*

const square1 = (x) => {
  return x * x;
};
//is the same as
const square2 = (x) => x * x;

//LEFT OFF AT PAGE 44 ARROW FUNCTIONS 11/9
/*
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(10, 2));

//ARROW FUNCTIONS

/*
console.log("The future says:", future());
function future() {
  return "You'll never have flying cars";
}

/*

const halve = function (n) {
  return n / 2;
};
let n = 10;
console.log(halve(100));
//50
console.log(n);
//10

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  //60
}
//y isn't visible here
console.log(x + z);
//40
*/
/*
Each binding has a scope, which is the part of the program in which the binding is visible. For bindings defined outside of any function or block, the scope is the whole program—you can refer to such bindings wherever you want. These are called global. But bindings created for function parameters or declared inside a function can be referenced only in that function, so they are known as local bindings.

(Page 40). 

//BINDINGS AND SCOPES

/*

const makeNoise = function () {
  console.log("Pling!");
};
makeNoise();
//pling

const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10));
//1024


const square = function (x) {
  return x * x;
};
console.log(square(10));
*/
/*
 **************************************
 **************************************
 ********Chapter 3: Functions**********
 **************************************
 **************************************
 **************************************
 */

/*
let num = prompt("How many lines is your grid?");
for (let i = 0; i < num; i++) {
  if (i == 0) {
    console.log(" # # # #");
  } else if (i % 2 != 0) {
    console.log("# # # #");
  } else {
    console.log(" # # # #");
  }
}
//^^ Pg. 38 Excercise 3: Chessboard ^^
*/
/*
for (let i = 0; i < 101; i++) {
  if (i % 3 === 0 && !(i % 5 === 0)) {
    console.log("Fizz");
  } else if (!(i % 3 === 0) && i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

//^^ Pg. 38 Excercise 2: Fizzbuzz ^^
/*
/*
let stringy = "#";
for (let i = 0; i < 8; i++) {
  console.log(stringy);

  stringy += "#";
}

//^^ EXCERCISE 1 ^^ Looping a triangle
*/

//ABOVE ARE CHAPTER 2 EXERCISES

/*
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella");
    break;
  case "sunny":
    console.log("Dress lightly");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weasther type!");
    break;
}

//SWITCH

/*
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
} // → 21

for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
*/
//FOR LOOPS

/*
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
*/

//DO WHILE LOOPS

/*
let result = 1;
let counter = 0;
while (counter < 10) {
  result *= 2;
  counter++;
}
console.log(result);

let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}
*/
//Code above here is about WHILE LOOPS

/*
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of 12" + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}




//Code above here is about conditional statements
//LEFT OFF HERE ON PAGE 28 ON 11/8/2020




/*
let theNumber = Number(prompt("Pick a number"));
console.log("Your numer is the square root of " + theNumber * theNumber);
/*11
console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100);
//prompt("Howdy");
//SECTION ABOVE: FUNCTIONS (((Scroll up 2 readit maaannn)))

/*
let one = 1,
  two = 2;
console.log(one + two);

var name = "Ayda";
const greeting = "Hello";
console.log(greeting + " " + name);
//Hello Ayda

let luigisDebt = 140;
luigisDebt -= 35;
console.log(luigisDebt);

//Above section is about let

/* 
Chapter 2: Program structure
CHAPTER 2 STARTS ABOVE HERE
CHAPTER 2 STARTS ABOVE HERE
CHAPTER 2 STARTS ABOVE HERE
CHAPTER 2 STARTS ABOVE HERE
CHAPTER 2 STARTS ABOVE HERE
CHAPTER 2 STARTS ABOVE HERE
CHAPTER 2 STARTS ABOVE HERE
CHAPTER 2 STARTS ABOVE HERE
CHAPTER 2 STARTS ABOVE HERE
CHAPTER 2 STARTS ABOVE HERE
CHAPTER 2 STARTS ABOVE HERE
CHAPTER 2 STARTS ABOVE HERE
CHAPTER 2 STARTS ABOVE HERE
*/

/*
console.log(null == undefined); // → true
console.log(null == 0); // → false

/*
console.log(true ? 1 : 2); // → 1
console.log(false ? 1 : 2); // → 2
console.log(8 * null); // → 0
console.log("5" - 1); // → 4
console.log("5" + 1); // → 51
console.log("five" * 2);


/*
console.log("Hello \n hekllp");
document.body.innerHTML =
  "<h1> FDIsopghpfgh </h1> <p> But in the meantime I'll just wait here and listen to you speak, or scream. And everydaqy that you want to waste, you care? </p>";
console.log(`Backtick-quoted strings, usually called template literals, can do a few more tricks. Apart from being able to span lines, they can also embed other values.

  (Page 15). `);
console.log(`half of 100 is ${100 / 2}`);
console.log("UNARY OPERATORS");
console.log(typeof 4.5);
console.log(typeof "x");
let x = 123.4523512352351341234343463553342;
console.log(typeof x);
console.log(-(10 - 2));
console.log("Itchy" != "Scratchy");
document.body.innerHTML += `${10 * 10}`;
console.log("Aardvark" < "Zoroaster");
//https://flaviocopes.com/javascript-unicode/
//https://www.w3schools.com/charsets/ref_html_utf8.asp
console.log("Using Unicode in a string");
const s1 = "\u00E9"; //é
console.log(s1);
const s2 = "\u0065\u0301"; //é
const s3 = 'e\u0301' //é
s3.length === 2 //true
s2 === s3 //true
s1 !== s3 //true
console.log(s2);
const s1 = "\u00E9"; //é
const s3 = "e\u0301"; //é
s1 !== s3;
/*

LEFT OFF HERE 11/7

------------Add numbers 1 - 10 ------------

let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
//Add numbers 1 - 10
console.log(total);
*/
