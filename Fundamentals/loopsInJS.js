/** Iterations - For Loop */
// print a message 10 times

for (let i = 1; i <= 5; i++) {
  console.log('Srishti');
}

// print a series of number from 1 - 20
let i;
for (i = 1; i <= 20; i++) {
  console.log(i);
}

// print all the even numbers between 1 - 50
let j = 2;
for (; j <= 50; ) {
  console.log(j);
  j += 2;
}

// prime or not
let num = 7;
let isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log('Prime');
} else {
  console.log('Not Prime');
}


/******************************************************/

/** Nested Loops */
/* print multiplication Table of 4*/

// let num = 4;

for (let num = 2; num <= 10; num++) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
  console.log('*********');
}

/******************************************************/

/** While Loop */

let k = 1;

while (k <= 10) {
  console.log(k);
  k++;
}

/******************************************************/

/** Do- While Loop */
//Guess the number

let randomNum = Math.round(Math.random() * 10);
console.log(randomNum);

let guessedNum;

do {
  guessedNum = prompt('Guess the Number: ');
  if (guessedNum == randomNum) {
    console.log('Guessed Correctly!!');
  } else {
    console.log('Take another guess');
  }
} while (guessedNum != randomNum);

/******************************************************/

/** Switch Statement */

// Simulate a traffic light using switch

let color = 'yellow';

switch (color) {
  case 'red':
    console.log('STOP! the light is red.');
    break;

  case 'yellow':
    console.log(' CAUTION! the light is yellow.');
    break;

  case 'green':
    console.log('GO AHEAD!');
    break;

  default:
    console.log('Invalid color');
}
