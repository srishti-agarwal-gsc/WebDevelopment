// Problem statement

/*You are required to implement a grading system for a school based on the marks obtained by students in a test. 
The goal is to write a JavaScript program that determines the grade of a student using conditional statements.

The grades will be assigned in the result variable based on the following criteria:
1- If the value of the marks variable is greater than or equal to 90, the value of the result variable should be "A grade"
2- If the marks are between 80 and 89, the value of the result variable should be "B grade".
3- If the marks are between 70 and 79, the value of the result variable should be "C grade".
4- If the marks are between 60 and 69, the value of the result variable should be "D grade".
5- If the marks are less than 60, the value of the result variable should be "F grade".

Expected Input
89
Expected Output
B
Expected Input
93
Expected Output
A

*/

//Solution

//Write a program to determine the grade of the student
//Determine the grade and assign it to the result variable.

function main(marks) {
  let result;
  //write your code here
    if (marks >= 90) {
        result = "A grade";
    }else if (marks >= 80 && marks < 90) {
        result = "B grade";
    }else if (marks >= 70 && marks < 80) {
        result = "C grade";
    }else if (marks >= 60 && marks < 70) {
        result = "D grade";
    }else {
        result = "F grade";
    }

  return result;
}
