// Problem statement

/*You have already completed the email validation program using "||" operator. 
Now modify the code and rewrite the conditions to validate the email using the "&&" operator.

Additionally, include one more condition that: Email should have at least 3 characters before “@.”

If the email is valid, store the value of the email in the result variable with a welcome message. 
If the email is invalid, store the string "invalid email" in the result variable.

Expected Input
 xyz@gmail.com
Expected Output
 Welcome xyz@gmail.com to our site
Expected Input
 xz@gmail.com
Expected Output
 invalid email

*/

//Solution

function main(email) {
    let result;

    // Step 1: Find the index of "@" in the email
    let indexOfAtTheRate = email.indexOf('@');  
  
    // Step 2: Find the index of the last dot "." in the email
    let indexOfLastDot = email.lastIndexOf(".");

    // Step 3: Calculate the length of the email
    let totalLengthOfEmail = email.length;

    // Step 4: Validate the email
    // Check if there are at least 3 characters before the "@" symbol
    // Ensure there is a dot "." at least 4 characters after "@"
    // Make sure there are at least 2 characters after the last dot "."

    // If all conditions are met, assign a welcome message with email name to result
    // If any condition fails, assign "invalid email" to result
    let minCharsBetween = Number(indexOfAtTheRate) + 4;
      
    if((indexOfAtTheRate >= 3) && (indexOfLastDot > minCharsBetween) && ((totalLengthOfEmail - (indexOfLastDot + 1)) >= 2 ) ) {
    result = "Welcome " + email;
    } else {
        result = "invalid email";
    }

    // Return the final result
    return result;
}
