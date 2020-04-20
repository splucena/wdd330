# Programming Basics

## Comments

```
// this is a short comment
```

```
/* This is a longer comment
anything here will be ignored
This is useful to put notes
*/
```

## Javascript Grammar

```
const message = 'Hello World'
alert(message)
```

```
const message = 'Hello world';alert(message); // oneliner
```

There's no need to add semicolons at the end of lines. However, it can be error-prone and cuase a number of automated services such as code minifiers and validators to not work properly.

For this reason, it's considered **_best practice_** to combine the two and write each statement on a new line, terminated by a semi-colon, like so:

```
const message = 'Hello world';
alert(message);
```

## Reserved Words

```
abstract, await, boolean, break, byte, case, catch, char,
class, const, continue, debugger, default, delete, do,
double, else, enum, export, extends, false, final, finally,
float, for, function, goto, if, implements, import, in,
instanceof, int, interface, let, long, native, new, null,
package, private, protected, public, return, short, static,
super, switch, synchronized, this, throw, throws, transient,
true, try, typeof, var, volatile, void, while, with, yield
```

Not reserved keywords but are important part of the language

```
undefined, NaN, Infinity
```

## Primitive Data Types

* Sting
* Symbol (Introduced in ES6)
* Number
* Boolean
* Undefined
* Null

JavaScript has a special operator called **_typeof_** for finding out the type of a value

```
typeof 'hello'
<< 'string'

typeof 10
<< 'number'

typeof true
<< 'boolean'

typeof {ninja: 'turtle'}
<< 'object'

typeof [ 1, 2, 3 ]
<< 'object'
```

## Variables

## Declaring and Assigning

**_const_** is used when the variable will not be reassigned to another value

**_let_** is used if the variable might be reassigned later in the program

You can declare and assign multiple variables at the same time

```
let x = 3; y = 4; z = 5;
```

**_var_** same as **_let_** and was retained for backwards compatibility

## Scope

**_let_** and **_const_** means they are **_block scoped_**, meaning their value only exists inside the block they are declared in.

## Global Scope

Any variable declared outside of a block.

## Local Scope

Blocks can be used to create a local scope. This means any variables defined inside a block using the **_let_** or **_const_** will only be available inside that block and not be accessible outside of that block.

```
const a = 1;

{ const a = 3; a; }

Global
<< 1
Local
<< 3
```

## Naming Constants & Variables

Constants and variables can start with any upper or lower-case letter, and underscore, \_, or dollar character, $. They can also contain numbers, but cannot start with them.

```
let animal = {name : 'dog'};
let _dog = 'chihuahua';
let strike1 = 1;
let first_name = 'Sum';

Camel Case
firstName

Underscore
first_name
```

## Strings

A string is a collection of characters, such as letters and symbols

```
'hello'
```

### Using a Constructor Function

```
new String('hello');
<< [String: 'hello']
```

### Backslashes

The backlash is used to escape special characters such as:

* Single quote marks \'
* Double quote marks \"
* End of line \n
* Carriage return \r
* Tab \t

## String Properties and Methods

Primitive data types and objects have properties and methods. Properties are information about the object or value, while methods perform an action on the object or value - either to change it or to tell us something about it.

## Wrapper Objects

Tehnically, only objects have properties and methods. Javascript overcomes this by creating **_wrapper objects_** for primitive data types.

```
const name = 'Alexa';
<< 'Alexa'

Access property using dot notation
name.length // retrieve the name of variable's length property
<< 5

or an alternative notation using square brackets
name['length']; // property name in quote marks
<< 5

name.toUpperCase();
<< 'ALEXA'

name.toLowerCase();
<< 'alexa'

name.charAt(1);
<< l

name.indexOf('A');
<< 0

name.indexOf('z');
<< -1 // 'z' is not in 'Alexa'

name.includes('a');
<< true

name.includes('z');
<< false

name.startsWith('A');
<< true

name.endsWith("A");
<< false

'Javascript'.concat('Ninja');
<< 'JavascriptNinja'

'Hello'.concat(' ', 'World', '!');
<< 'Hello World!'

'Java' + 'Script' + ' Ninja';
<< 'JavaScript Ninja'

'   Hello   '.trim();
<< 'Hello'

'Hello'.repeat(2);
<< 'HelloHello'
```

## Template Literals

**_Template literals_** use the backticks, `, to deliminate the string.

```
Single and double quote will both work without the need to delimit with \ backslash
`She said, "It's Me!"`
```

```
const name = 'Siri';

`Hello $ { name }`;
<< 'Hello Siri!'

const age = 39;

`I will be ${ age + 1 } next year`;
<< 'I will be 40 next year'

Can also contain line breaks
`This is the start ....



... and this is the end`;
<< 'This is the start ... \n\n\n ... and this is the end'

Escaping a `
`This character, \`, is a backtick.`
<< 'This character, `, is a backtick'
```

## Symbols

```
const uniqueID = Symbol('this is a unique ID');

typeof(uniqueID);
<< 'symbol'

console.log(uniqueID);
<< 'Symbol(this is a unique ID)'

String(uniqueID);
<< 'Symbol(this is a unique ID)'

It is possible for two variables to point to the same symbol if the ***for()*** method is used.
const A = Symbol.for('shared symbol');
const B = Symbol.for('shared symbol');
```

The main use-case for symbols is as object property.

## Numbers

Numbers can be **_integers_** (whole number such as 3) or **_floating point numbers_** (often referred to as just "decimals" or "floats"), such as 3.14159).

```
typeof 42 // integer
<< 'number'

typeof 3.14159 // floating point decimal
<< 'number'

Number.isInteger(42);
<< true

Number.isInteger(3.14);
<< false

new Number(3);
<< [Number: 3]
```

## Number Methods

```
5..toExponential();

5 .toExponential();

5.0.toExponential();

(5).toExponential();

const number = 5;
number.toExponential();
<< "5e+0" // all returns this

const PI = 3.1415926;
PI.toFixed(3); // only one dot is needed when using constants or variables
<< "3.142""
```

**Note** that the value is returned as a string, rather than a number.

```
325678..toPrecision(2);
<< "3.3e+5"

2.459.toPrecision(2);
<< "2.5"
```

Ended @page 78 Arithmetic Operations
