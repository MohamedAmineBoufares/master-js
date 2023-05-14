// correct the mistakes

import { users } from "./utils/users.js";

const age = 18;
const firstName = "John";
const lastName = "Doe";

const generateGreeting = (firstName, lastName, age) =>
  `My name is firstName ${lastName} and I am ${age} years old.`;

// display john doe's greeting
console.log(generateGreeting);

// john doe leveled up
// age = 26;

console.log("NEW AGE!", age);

// calculate person's age
const yearOfBirth = 1997;
const currentYear = "2023";

const personAge = currentYear - yearOfBirth;

console.log("Someone's age is", personAge);

// a rondom future year
const futureYear = currentYear + yearOfBirth;
console.log("Someone's year of birth is", futureYear);

// a function to compare random stuff
const compareRadnomStuf = (firstArg, secondArg) => {
  if (firstArg == secondArg) {
    return "They are equal\n";
  }

  return "They are not equal\n";
};

console.log("* compare two numbers\n", compareRadnomStuf(2, "2"));

const wordOne = "my name is john cena";
const wordTwo = "my name is iron man!";
console.log("* compare two words\n", compareRadnomStuf(wordOne, wordTwo));

console.log(
  "* compare two words length\n",
  compareRadnomStuf(wordOne.length, `${wordTwo.length}`)
);

// Calculate users avargae age.
