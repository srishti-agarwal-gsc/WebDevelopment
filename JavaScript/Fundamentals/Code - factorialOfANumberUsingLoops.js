// Problem statement

/* You are building a program to calculate the factorial of a given positive integer. 
The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. 
Write a JavaScript function using a for loop that takes a positive integer as input and returns its factorial.

Expected Input
6
Expected Output
720

*/

//Solution

function factorial(limit) {
    let result = 1;
  
    for(let i=1; i<= limit; i++) {
        result= result*i;
    }

    return result;
}
