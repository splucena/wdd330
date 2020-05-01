// Activity #1
function sum(n) {
    // convert input to float
    const number1 = parseFloat(n);

    // check if input is a number
    if (!isNaN(number1)) {
        let total = 0;
        for (let i = 0; i <= n; i++) {
            total += i;
        }
        return total;
    } else return 'Enter a valid number.';
}

// display result on the browser
function displayValue() {
    const number = document.getElementById('text-entry').value;
    total = sum(number);
    document.getElementById('text-entry-container').innerHTML = total;
}

// instead of calling onclick from html I have attached the
// click event to the submit button
document.getElementById('submit').addEventListener('click', displayValue);

// Activity #2
// function expression
const computeExpression = (num_1, operation, num_2) => {
    // initialize and convert each variable
    const num1 = parseFloat(num_1);
    const num2 = parseFloat(num_2);

    // check if both input are numbers
    if (!isNaN(num1) & !isNaN(num2)) {
        // peform the arithmetic operation based on the button pressed
        // by the user
        switch (operation) {
            case '+':
                return Number(num1) + Number(num2);
            case 'x':
                return num1 * num2;
            case '-':
                return num1 - num2;
            default:
                return num1 / num2;
        }
    } else return 'Enter a valid number.';
}

// traditional function
// another way of writing the computeExpression function
function compute(num1, operation, num2) {
    switch (operation) {
        case '+':
            return Number(num1) + Number(num2);
        case 'x':
            return num1 * num2;
        case '-':
            return num1 - num2;
        default:
            return num1 / num2;
    }
}

// using callback to solve arithmetic problems
let add = (num1, num2) => {
    return num1 + num2;
}

let subtract = (num1, num2) => {
    return num1 - num2;
}

let multiply = (num1, num2) => {
    return num1 * num2;
}

let divide = (num1, num2) => {
    return num1 / num2;
}

let computeUsingCallback = (num1, num2, callback) => {
    return callback(num1, num2);
}

// display result on the browser
function displayArithmeticOperationValue(e) {
    let calcType = e.target.value;
    let num1 = document.getElementById('number-1').value;
    let num2 = document.getElementById('number-2').value;

    let op = null;
    switch (calcType) {
        case '+':
            op = add;
            break;
        case '-':
            op = subtract;
            break;
        case 'x':
            op = multiply;
            break;
        case '/':
            op = divide;
            break;
    }
    console.log(calcType);
    console.log(op);

    //const result = computeExpression(num1, operation, num2);
    const result = computeUsingCallback(parseFloat(num1), parseFloat(num2), op);
    document.getElementById('arithmetic-result').innerHTML = result;
}

// attach click event to the add button
const addButton = document.getElementById('addition-submit');
addButton.addEventListener('click', displayArithmeticOperationValue);

// attach click event to the subtract button
const subtractionButton = document.getElementById('subtraction-submit');
subtractionButton.addEventListener('click', displayArithmeticOperationValue);

// attach click event to the multiplication button
const multiplicationButton = document.getElementById('multiplication-submit');
multiplicationButton.addEventListener('click', displayArithmeticOperationValue);

// attach click event to the division button
const divisionButton = document.getElementById('division-submit');
divisionButton.addEventListener('click', displayArithmeticOperationValue);