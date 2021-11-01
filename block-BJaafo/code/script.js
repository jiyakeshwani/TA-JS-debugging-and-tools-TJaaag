function fullName(firstName, lastName) {
  return firstName + "  " + lastName;
}
let result = fullName("Jiya", "Keshwani");

let expected = "Jiya";
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
let expectedTwo = "Jiya Keshwani";
if (result !== expectedTwo) {
  throw new Error(`${result} is not equal to ${expectedTwo}`);
}
// after making the first test fail I am not able to see the output of second test

function totalAmount(amount, taxRate) {
  return amount + amount * taxRate;
}
let resultSecond = totalAmount(20000, 10);
let expectedSecond = 6788;
if (result !== expected) {
  throw new Error(`${resultSecond} is not equal to ${expectedSecond}`);
}
let expectedSecondTwo = totalAmount(20000, 10);
if (result !== expectedSecondTwo) {
  throw new Error(`${resultSecond} is not equal to ${expectedSecondTwo}`);
}
// after making the first test fail I am not able to see the output of second test
