# Objects

## Object Literals

> If a property's value is a function, it is known as a method

> One way to think of an object is that it's like a dictionary where you look up a property name and see a value.

> Objects are often used to keep any related information and functionality together in the same place.

```
const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

// Empty object
const spiderman = {} // recommended object literal notation

// Create an object using a constructor function
const spiderman = new Object(); // not recommended

const name = 'Iron Man';
const realName = 'Tony Stark';

// long way
const ironMan = {name: name, realName: realName};

// short way
const ironMan = {name, realName};
```

## Accesing Properties

```
// dot notation
superman.name; // much more common

// bracket notation
superman['name']; // can access nonstandard property and methods names like 'real name'

// accessing a property that doesn't exist will return undefined
```

## Computed Properties

```
const hulk = {['Hulk' + 'Phrase': 'Hulk smash!']};
hulk.HulkPhrase; // Hulk smash!
```

## Checking if Properties or Methods Exist

```
'city' in superman;
or
superman.city !== undefined; // wiil return true even if the property has been inherited
or
superman.hasOwnProperty('city'); // will return any property that belong to the particular object
```

## Finding all the Properties of an Object

```
for (const key in superman) {
    console.log(key + ': ' + superman[key]);
}

// Make sure that only an object's own properties and methods are returned
for (const key in superman) {
    if (superman.hasOwnProperty(key)) {
        console.log(key + ': ' + superman[key]);
    }
}

// Object.keys() method will return an array of all the keys of an object
// Object.values() method will return an array of all values of an object
for(const key of Object.keys(superman)) {
    console.log(key);
}
```

## Adding Properties

```
superman.city = 'Metropolis';
>> 'Metropolis'
```

> An object is not an ordered list

## Changing Properties

```
superman['real name'] = 'Kal-El'; // 'Clark Kent' before
>> 'Kal-El'
```

## Removing Properties

```
delete superman.fly
>> true
```

## Nested Objects

> Contains other objects

```
const superheroes = {
    superman: {
        name: 'Clark Kent',
        powers: [],
        fly: () = > {
            return 'Fly';
        }
    },
    batman: {
        name: 'Bruce Wayne',
    }
}

// Nested objects can be accessed by referencing each property name in order or using either the dot or bracket notation

superheroes.superman.name;
>> 'Clark Kent'
```

## Objects are Copied By Reference
