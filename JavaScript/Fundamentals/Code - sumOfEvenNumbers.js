// Problem statement

/* You are tasked with creating a program that calculates the sum of even numbers up to a given limit. 
Write a JavaScript function using a for loop that takes a positive integer as input and returns the sum of all even numbers from 1 up to that integer.

Expected Input
6
Expected Output
12

*/

//Solution

function sumOfEvenNumbers(limit) {
  // Initialize sum to store the sum of even numbers
  let result = 0;

  // Iterate through numbers from 1 to the given limit
  for (let i = 1; i <= limit; i++) {
    // Check if the current number is even
    if (i % 2 === 0) {
      result += i;
    }
  }

  // Return the sum of even numbers
  return result;
}
