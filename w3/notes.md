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

> Objects are assigned by reference. This means that if a variable is assigned to an object that already exists, it will simply point to the exact same space in memory. So any changes made using either reference will affect the same object.

```
const thor = {
    name: 'Thor'
};

const cloneThor = thor;
cloneThor.name = 'Clor';

thor.name;
>> 'Clor'
```

> This doesnt happen when primitive values are used instead of objects

```
a = 1;
b = a;

b = 2;
a
>> 1 // value of a hasn't changed
```

## Objects as Parameters to Functions

```
function greet({greeting,name,age}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}

greet({ greeting: `What's up dude`, age: 10, name: `Bart` });
>> 'What\'s up dude! My name is Bart and I am 10 years old.'

function greet({greeting='Hello',name,age=18}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}

greet({ name: 'Lisa', age: 8 });
>> 'Hello! My name is Lisa and I am 8 years old.'
```

> This technique is referred to as using named parameters and is often used when a function has a large amount of optional parameters

## this

```
const dice = {
    sides: 6,
    roll():  {
        return Math.floor(this.sides * Math.random()) + 1;
    },
    // or
    roll: function() {
        return Math.floor(this.sides * Math.random()) + 1;
    },
    // but not
    roll: () => {
        // this keyword is not accessible
    }
}
```

## Namespacing

> Use object literal pattern

```
const myMaths = {
    square(x) {
        return x * x;
    },
    mean(array, callback) {
        if (callback) {
            array = array.map( callback );
        }

        const total = array.reduce((a, b) => a + b);
        return total / array.length;
    }
}
```

## Built-in Objects

## JSON

> JSON is a string representation of the object literal notation. There are, however, a couple of key differences:

- Property names must be double-quoted
- Permitted values are double-quoted strings, numbers, true, false, null, arrays, and objects
- Functions are not permitted values

```
Sample JSON string representation

const batman = '{"name": "Batman"}';

// parse() method takes a string of data in JSON format and returns a JS object
JSON.parse(batman);
>> {name: 'Batman'}

// stringify() method does the opposite, taking a JS object and returning a string of JSON data
JSON.stringify(batman);
>> '{"name": "Batman"}'; // functions are ignored
```

> These issues are also implementation dependent, which means they rely on the
> JavaScript engine and operating system they are running on rather than the
> language itself. So you may get slightly different answers using a different web
> browser on the same OS or using the same web browser on a different OS!

> If you need more precision, you could consider the decimal.js library

## Random Numbers

```
To generate random numbers between 0 and another number, we can multiply the value by that number

6 * Math.random(); // random numbers between 0 and 6

Math.floor(6 * Math.random()); // 0 - 5  but never 6 because it always rounds down
```

## Dates

```
const diwali = new Date(1508367600000);
diwali.getFullYear(); // instead of diwali.getYear() broken after 2000
```

> Working with dates and timezones can be tricky. The moment.js library4 gives you
> a large number of methods that make it easier to work with dates, as well as support
> for multiple locales.

## RegExp Object

A regular expression (or RegExp, for short) is a pattern that can be used to search
strings for matches to the pattern. A common use is “find and replace” type
operations

Links

- http://www.regextester.com
- https://regex101.com
- http://www.amazon.com/Mastering-Regular-Expressions-Jeffrey-Friedl/dp/0596528124/
- http://www.regular-expressions.info/

```
\\ all words ending in `ing`
[a-zA-Z]+ing$;

const pattern = /[a-zA-Z]+ing$/;
or
const pattern = new RegExp('[a-zA-Z]+ing$');


pattern.test('joke')); >> false
pattern.test('planting'); >> true

The exec() method works in the same way as the test() method, but instead of return true or false, it returns an array containing the first match found, or null if there aren't any matches.

pattern.exec('joke'); >> null

pattern.exec('joking');
>> [ 'joking', index: 0, input: 'joking' ]

\^ negates
/[^A-Z]/ // not capital letters
```

## Regular Expression Properties

- The global property makes the pattern return all matches. By default, the
  pattern only looks for the first occurrence of a match.
- The ignoreCase property makes the pattern case-insensitive. By default, they
  are case sensitive.
- The multiline property makes the pattern multiline. By default, a pattern

The following can be placed after a regular expression literal to change default properties

- g sets the global property to tru
- i sets the ignoreCase property to true
- m sets the multiline property to true

## Special Characters

- . matches any character, except line breaks
- \w matches any word character, and is equivalent to [A-Za-z0-9_]
- \W matches any non-word character, and is equivalent to [\^A-Za-z0-9_]
- \d matches any digit character, and is equivalent to [0-9]
- \D matches any non-digit character, and is equivalent to [^0-9]
- \s matches any whitespace character, and is equivalent to [ \t\r\n\f]
- \S matches any non-whitespace character, and is equivalent to [^ \t\r\n\f]

Modifiers

- ? makes the preceding token in the regular expression optional
- `*` matches one or more occurrences of the preceding token
- `-` matches one or more occurrences of the preceding token
- {n} matches n occurrences of the preceding token
- {n,} matches at least n occurrences of the pattern
- {,m} matches at most m occurrences of the preceding token
- {n,m} matches at least n and at most m occurrences of the preceding token
- ^ marks the position immediately before the first character in the string
- $ marks the position immediately after the last character in the string


# Node Type

| Code | Type |
|---|---|
| 1 | element|
| 2 | attribute |
| 3 |text |
| 8 | comment |
| 9 |body|