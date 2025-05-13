// Problem statement

/*Write a program that checks whether a given year is a leap year. 
The program should follow specific rules to determine if a year is a leap year and store the result as a boolean value (true or false) in a variable named answer.

Check the following conditions to check if a given year is a leap year or not:

Condition 1: If a year is divisible by 4, it is a leap year.
Condition 2: If a year is divisible by 100, it is not a leap year.
Condition 3: If a year is divisible by 400, it is a leap year even though it is divisible by 100.

Input
2013
Expected Output
false

Input
2004
Expected Output
true

Input
2100
Expected Output
false

*/

//Solution

function leapYear(year) {
    let answer;
   //Write your code here
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + ' is a leap year');
        answer = true;
    } else {
        console.log(year + ' is not a leap year');
        answer = false;
    }
	return answer;
}