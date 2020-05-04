// Object literal

const car = {
    brand: 'Toyota',
    model: 'Innova',
    colors: ['blue', 'yellow', 'black', 'red'],
    transmission: ['manual', 'automatic'],
    drive: (x, y, callback) => {
        if (typeof callback === 'function') {
            return callback(x, y);
        }
        let message = callback;
        return message + ' Invalid function call.';
    },
    transform: (x, y) => {
        return x * y;
    },
    mutate: (x, y) => {
        return x + y;
    }
};

// Practice callback
//console.log(car.drive(3, 4, car.transform));
//console.log(car.drive(4, 4, car.mutate));
//console.log(car.drive(4, 4, 'Testing callback'));

const hulk = {
    ['hulk_' + 'phrase']: 'Hulk smash!'
};
//console.log(hulk.hulk_phrase);

hulk.add_property = 'Property added.';
//console.log(hulk);

// this keyword

const dice = {
    sides: 6,

    roll: function () {
        return Math.floor(this.sides * Math.random()) + 1;
    }
};

//console.log(dice.roll());

// namespace
const myMaths = {
    square(x) {
        return x * x;
    },
    mean(array, callback) {
        if (callback) {
            // this will not work
            //array.map( callback );
            array = array.map(callback);
        }

        const total = array.reduce((a, b) => a + b);
        console.log(array);
        console.log(total);
        return total / array.length;
    }
}

//console.log(myMaths.square(3));
//console.log(myMaths.mean([1, 2, 3], myMaths.square))

// RegExp

const pattern = /[a-zA-Z]+ing$/;
console.log(pattern.test('joke'));
console.log(pattern.test('planting'));

console.log(pattern.exec('The joking'));