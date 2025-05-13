// Problem statement

/*Develop a program to calculate the area of a right angle triangle. 
The program takes the base and height of a triangle as input and calculates the area using the appropriate arithmetic operators.

Input:-
Base of the triangle: 10
Height of Triangle: 20

Expected Output:-
Area of the triangle: 100

*/

//Solution

// We have been provided with lengh and breadth of a right angle triangle
// We need to find the area of a triangle and store the result in variable answer
// Area of a right angle triangle = 0.5*(length*breadth) 

function areaOfTriangle(num1,num2){
    let answer; 
    answer = 0.5*(parseFloat(num1) * parseFloat(num2));
    return answer;
}
