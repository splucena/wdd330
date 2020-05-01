let main = document.querySelector('main');

let bottles = 10;
while (bottles > 0) {
    document.write(bottles + '<br />');
    bottles--;
}

document.write('<br />');

let can = 11;
while (--can) {
    document.write(can + '<br />');
}

// Functions

const hello = (str) => {
    document.write(str);
}

hello('hello ES6!');

function hello_old(str) {
    document.write(str);
}

document.write('<br />');

hello_old('hello old function!');

// variable number of arguments

const mean = (...values) => {
    let total = 0.0;
    for (v of values) {
        total += v;
    }

    return total / values.length;
}

document.write('<br />');
document.write(mean(1, 2, 3, 4, 5, 5.5));

// Default parameters
const greetings = (message = 'Hello world!') => {
    return message;
}

document.write('<br />');
document.write(greetings('Weh'));

// arrow function
const square = x => x * x;
document.write('<br />');
document.write(square(2));
document.write('<br />');
document.write(hoisted('I was hoisted'));

function hoisted(message) {
    return message;
}

// function callback
function sing(song, callback) {
    console.log((`i'm singing along to a ${song}.`));

    if (typeof (callback) === 'function') {
        callback();
    }
}

function dance() {
    console.log(`I'm moving my body to the groove!`);
}

sing('Let it go', dance);

// function callback application
console.log([1, 3, 12, 5, 23, 18, 7].sort());
let sorted_array = [1, 3, 12, 5, 23, 18, 7].sort(numberically);
console.log(sorted_array);

function numberically(a, b) {
    //console.log(a, b);
    //console.log(a - b);
    return a - b;
}

// for large numbers
function numerically_enhanced(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

// Array functions

const colors = ['Red', 'Green', 'Blue'];
colors.forEach((color, index) => {
    console.log(`Color at position ${index} is ${color}`);
});

const mapArray = [1, 2, 3].map(square);
console.log(mapArray);

const mapMultiply = [1, 2, 3].map(x => 2 * x);
console.log(mapMultiply);

const reduceArray = [1, 2, 3].reduce((x, y) => x + y);
console.log(reduceArray);

const filterArray = [1, 2, 3].filter(x => x % 2 == 0);
console.log(filterArray);

//reduceRight() , every() , find() and some()

// Chaining
const chaining = [1, 2, 3].map(x => x * 2).reduce((x, y) => x + y);
console.log(chaining);
const sales = [100, 230, 55].map(amount => amount * 1.15).reduce((x, y) => x + y);
console.log(sales);

// Improving mean function

function improved_mean(array, callback) {
    if (callback) {
        console.log('calling callback');
        array = array.map(callback);
        //console.log(array_);
    }
    const total = array.reduce((x, y) => x + y);
    console.log(total);
    return total / array.length;
}

console.log(improved_mean([2, 5, 7, 11, 4], x => 2 * x));
console.log(improved_mean([2, 5, 7, 11, 4]));