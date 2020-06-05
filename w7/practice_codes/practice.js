function wait(message, callback, seconds) {
    setTimeout(callback, seconds * 1000);
    console.log(message);
}

function selfDestruct() {
    console.log('BOOOOM!');
}

const message = 'This tape will self-desctruct in five seconds....';
// event-loop
// JavaScript is still single-threaded, only only one task can happend at once.
// If an event only takes a small amount of time to happen, it will still have
// to wait until other parts of the program have executed before the
// callback is invoked.
console.log(wait(message, selfDestruct, 0));
console.log('Hmmmm, should I accept this mission or not....?');

// Callback hell is the term used to refer to this tangled mess of code

// Promise represents the future result of an asynchronous operation.

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

const promise = new Promise((resolve, reject) => {
    const n = dice.roll();
    setTimeout(() => {
        (n > 3) ? resolve(n): reject(n);
    }, n * 1000);
})

promise.then(result => console.log(`Yes! I rolled a ${result}`), result => console.log(`Drat! ... I rolled a ${result}`));