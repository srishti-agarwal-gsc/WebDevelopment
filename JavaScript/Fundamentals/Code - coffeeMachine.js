// Problem statement

/* Create a program that takes a customer's coffee order as input, converts the input to lowercase, and uses a switch statement to handle different coffee types. The program should calculate the price based on the selected coffee type and store the result in a variable named "answer."

The coffee types and their prices are as follows:

Regular: $2.50
Latte: $3.50
Cappuccino: $4.00
Espresso: $2.50

Expected Input
regular
Expected Output
$2.50

Expected Input
ESPRESSO
Expected Output
$2.50

*/

//Solution

function coffeeMachine(coffeeType) {
    let answer;

    // Convert the input coffee type to lowercase using the toLowerCase() method.
    let coffeeTypeLower =  coffeeType.toLowerCase();

    // Use a switch statement to handle different coffee types and store the price in 'answer'.

    // Add a default case to handle any invalid coffee types.
    switch (coffeeTypeLower) {
        case "regular" :
            answer = "$2.50";
            break;
        case "latte" :
            answer = "$3.50";
            break;
        case "cappuccino" :
            answer = "$4.00";
            break;
        case "espresso" :
            answer = "$2.50";
            break;
        default :
            break;
    }

    return answer;
}
