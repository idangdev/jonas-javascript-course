// ###########################
// ### Values and Variables

// let country = "Indonesia";
// let continent = "Asia";
// let population = 279;

// console.log("Country :" + country);
// console.log("Continent :" + continent);
// console.log("Population :" + population);

// ###########################
// ### Data Types
// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// ###########################
// ### let, const and var
// language = "Bahasa Indonesia";
// const country = "Indonesia";
// const continent = "Asia";
// const isIsland = false;
// isIsland = true;

// ###########################
// ### Basic Operators

/*
let population = 279;
console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 = country + " is in " + continent + ", and its " + population + " million people speak " + language;
const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description1);
console.log(description2);

*/

// ###########################
// ### Taking Decisions: if / else Statements
/*
let country = "Indonesia";
let population = 279;

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${33 - population} million below average`);
}

*/

// ###########################
// ### Taking Decisions: if / else Statements

/*
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 617
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143
*/

// ###########################
// ### Equality Operators: == vs ===

/*
const numNeighbours = Number(prompt("How many neighbour countries does your contry have?"));

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
*/

// ###########################
// ### Logical Operators

/*
const country = "AS";
const population = 40;
const isIsland = false;
const language = "english";

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
*/

// ###########################
// ### The switch Statement

/*
const language = "english";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/

// ###########################
// ### The Conditional (Ternary) Operator

const country = "Indonesia";
const population = 279;

// population >= 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);
console.log(`${country}'s population is ${population >= 33 ? "above" : "below"} average`);
