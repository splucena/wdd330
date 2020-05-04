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
console.log(car.drive(3, 4, car.transform));
console.log(car.drive(4, 4, car.mutate));
console.log(car.drive(4, 4, 'Testing callback'));

const hulk = {
    ['hulk_' + 'phrase']: 'Hulk smash!'
};
console.log(hulk.hulk_phrase);

hulk.add_property = 'Property added.';
console.log(hulk);