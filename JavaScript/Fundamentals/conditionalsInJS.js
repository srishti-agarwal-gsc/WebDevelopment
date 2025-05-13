/** Conditionals in JS */

/** if Statement */

// Print Number is even if Number is even

let num1 = prompt('Please enter the number');

if (num1 % 2 == 0) {
  console.log('Number is even');
}
console.log('Outside if');

/******************************************************/

/** if-else Statement */

let num2 = 12;

if (num2 % 2 == 0) {
  console.log('Even.');
} else {
  console.log('Odd.');
}

console.log('Outside if-else');

/******************************************************/

/** if- else if */

//Determine the quarter based on the month

let month = -13;
//prompt('Enter the month number.');

if (month >= 1 && month <= 3) {
  console.log('First Quarter');
} else if (month >= 4 && month <= 6) {
  console.log('Second Quarter');
} else if (month >= 7 && month <= 9) {
  console.log('Third Quarter');
} else if (month >= 10 && month <= 12) {
  console.log('Fourth Quarter');
} else {
  console.log('Invalid month.');
}

/******************************************************/

/** Nested If statements */

// Check eligibility for driving license
// age>=18 - eligible else not eligible
// passed the test - eligible and can obtain the license
// failed the test - eligible but cannot have the license

let age = 16;
let testPassed = false;

if (age >= 18) {
  console.log('Eligible for the license.');
  if (testPassed) {
    console.log(
      'Congratulations!, You have got the license.'
    );
  } else {
    console.log('Sorry, you did not clear the test.');
  }
} else {
  console.log('Not eligible for the license');
}

/******************************************************/

/** Ternary Operator */

let numb1 = 10;
let numb2 = 599;
let numb3 = 50;
let greater =
  numb1 > numb2
    ? numb1 > numb3
      ? numb1
      : numb3
    : numb2 > numb3
    ? numb2
    : numb3;

// if (numb1 > numb2) {
//   greater = numb1;
// } else {
//   greater = numb2;
// }

console.log('Greater number is ' + greater);
