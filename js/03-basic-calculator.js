// IMPORT THE MODULE

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION



let calculator;


let operation = prompt('Enter operation ( choose +, -, * or / ): ');
let number1 = parseFloat(prompt('Enter number 1: '));
let number2 = parseFloat(prompt('Enter number 2: '));

switch(operation) {
    case '+':
         result = number1 + number2;
        alert(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        alert(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        alert(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        alert(`${number1} / ${number2} = ${result}`);
        break;

    default:
        alert('Null operation');
        break;
}