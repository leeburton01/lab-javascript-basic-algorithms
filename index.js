// Iteration 1: Names and Input
let hacker1 = "Lee";
let hacker2 = "Mikko";
console.log(`The driver’s name is ${hacker1}`);
console.log(`The driver’s name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
let driverName = "";
for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName);
let navigatorName = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
  navigatorName += hacker2[j];
}
console.log(navigatorName);

