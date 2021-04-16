//Program for simple arithmetic operations

//take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
//take the operator input
const operator = prompt('Enter operator(either +, -, *, /):');
//take the operand input
const number2 = parseFloat(prompt('Enter second number: '));

let result;

//using if...else if...else
if (operator == '+') {
    result = number1 + number2;
    alert(result);
}
else if (operator == '-') {
    result = number1 - number2;
    alert(result);
}
else if (operator == '*') {
    result = number1 * number2;
    alert(result);
}
else {
    result = number1 / number2;
    alert(result);
}
//display the result

console.log('${number1} ${operator} ${number2} = ${result}');
