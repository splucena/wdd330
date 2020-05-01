// Activity #1
function sum(n) {
    //console.log(typeof (n));
    const number1 = parseFloat(n);
    //console.log(number1);
    //console.log(typeof number1);
    console.log(parseFloat('1'));
    console.log(parseFloat('w'));
    console.log(NaN === parseFloat('1'));

    if (!isNaN(number1)) {
        let total = 0;
        for (let i = 0; i <= n; i++) {
            total += i;
        }
        return total;
    } else return 'Enter a valid number.';
}

function displayValue() {
    const number = document.getElementById('text-entry').value;
    total = sum(number);
    document.getElementById('text-entry-container').innerHTML = total;
}
document.getElementById('submit').addEventListener('click', displayValue);

// Activity #2
// function expression
const computeExpression = (num_1, operation, num_2) => {
    //console.log(parseFloat(num1));
    //console.log(parseFloat(num2) === NaN);
    const num1 = parseFloat(num_1);
    const num2 = parseFloat(num_2);

    if (!isNaN(num1) & !isNaN(num2)) {
        console.log(1);
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
    console.log(2);
    return 'Enter a valid number.';
}

// arrow function


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

function displayArithmeticOperationValue(e) {
    let operation = e.target.value;
    //let operation = '+';
    let num1 = document.getElementById('number-1').value;
    let num2 = document.getElementById('number-2').value;

    const result = computeExpression(num1, operation, num2);
    document.getElementById('arithmetic-result').innerHTML = result;
}

const addButton = document.getElementById('addition-submit');
addButton.addEventListener('click', displayArithmeticOperationValue);

const subtractionButton = document.getElementById('subtraction-submit');
subtractionButton.addEventListener('click', displayArithmeticOperationValue);

const multiplicationButton = document.getElementById('multiplication-submit');
multiplicationButton.addEventListener('click', displayArithmeticOperationValue);

const divisionButton = document.getElementById('division-submit');
divisionButton.addEventListener('click', displayArithmeticOperationValue);