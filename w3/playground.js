console.log(1);

let add = (num1, num2) => {
    return num1 + num2;
}

let multiply = (num1, num2) => {
    return num1 * num2;
}

function arithmetic_operation(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(arithmetic_operation(1, 2, add));
console.log(arithmetic_operation(1, 2, multiply));