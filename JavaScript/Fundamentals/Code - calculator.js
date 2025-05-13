// Problem statement

/* Build a calculator application, and implement basic arithmetic operations. 
Write a JavaScript program that takes two numbers as input, performs addition, subtraction, multiplication, and division, and displays the results. 

Input:-
num1:20 
num2: 10

Expected Output:-
Addition is: 30
Subtraction is: 10
Multiplication is: 200
Division is: 2 
*/

//Solution

//We are given two numbers, add them and store the result in answer;
function add(num1, num2) {
  let answer;
  answer = parseFloat(num1) + parseFloat(num2);
  return answer;
}

//We are given two numbers, subtract them and store the result in answer;
function subtract(num1, num2) {
    let answer;
    answer = parseFloat(num1) - parseFloat(num2);
    return answer;
}
//We are given two numbers, multiply them and store their result in answer;
function multiply(num1, num2) {
    let answer;
    answer = parseFloat(num1) * parseFloat(num2);
    return answer;
}
//We are given two numbers, divide them and store their result in answer
function divide(num1, num2) {
    let answer;
    answer = parseFloat(num1) / parseFloat(num2);
    return answer;
}

