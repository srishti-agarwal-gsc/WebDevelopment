// Problem statement

/* You are developing an online shopping website, and you want to implement a discount system based on the total purchase amount. 
Write a JavaScript program using if statements and operators that calculate and display the total cost after applying a discount. 
The discount rules are as follows:

a- If the total purchase amount is $100 or more, apply a 10% discount 
b- If the total purchase amount is between $50 (inclusive) and $99.99 (inclusive), apply a 5% discount.
c- If the total purchase amount is less than $50, no discount is applied.

Input
200
Expected Output
180
Input
80
Expected Output
76

*/

//Solution

function discountCalculator(totalAmount) {
	// a variable to store the final amount after applying the discount
	let answer;

	// Check if the total amount is 100 or more to apply a 10% discount
	// Then subtract the discount value from the total amount to get the answer
	if(totalAmount >= 100){
		answer = totalAmount - (totalAmount * 10/100); 
	}

	// Check if the total amount is between 50 and 99.99 (inclusive) to apply a 5% discount
	if(totalAmount >=50 && totalAmount < 100) {
		answer= totalAmount - (totalAmount * 5/100);
	}

	// If the total amount is less than 50, no discount is applied
	// In this case, the answer should be the same as the total amount
	if ( totalAmount < 50) {
		answer = totalAmount;
	}

	// Returning the final amount after applying the discount
	return answer;
}
