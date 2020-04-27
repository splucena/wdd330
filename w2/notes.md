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

- Sting
- Symbol (Introduced in ES6)
- Number
- Boolean
- Undefined
- Null

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

Constants and variables can start with any upper or lower-case letter, and underscore, \_, or dollar character, \$. They can also contain numbers, but cannot start with them.

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

- Single quote marks \'
- Double quote marks \"
- End of line \n
- Carriage return \r
- Tab \t

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

## Arithmetic Operations

> Addition `2 + 1; >> 3`

> Subtraction `2 - 1; >> 1`

> Multiplication `2 * 1; >> 2`

> Division `2 / 2; >> 1`

> Exponentiation `2 ** 3; >> 8`

> Modulo `23 % 6; >> 5`

## Compound Assignment Operator

> +=; -=; \*=; /=; %=

```
let points = 10;
points += 10
<< 20
```

## Incrementing Values

```
let points = 6;

points++; // will return 6

++points; // will return 7
```

## Type Coercion

> '2' \* 8; // 16 Number

> '2' + '4'; // 24 String

> Number('4'); // 4 Number

## Number to String

```
String(3); // '3'

3 +''; // '3'

10..toString(2); // '1010'
```

## Parsing Numbers

```
parseInt('1010', 2); // converts binary, back to decimal
<< 10

const address = '221B Baker Street';
parseInt(address, 10);
<< 221

Different to the Number function, which returns NaN:
Number(address);
<< NaN

parseInt('2.4', 10); // drops the decimal; not rounded
<< 2
```

## Undefined

**_Undefined_** is the value given to variables what have not been assigned a value. It can also occur if an object's property doesn't exist or a function has a missing parameter.

## Null

**_Null means_** "no value".

## Boolean

Only 9 values are always false and these are knows as **\*falsy** values

```
" " // double quoted empty string literal
' ' // single quoted empty string literal
`` // emtpy template literal
0
-0 // considered different to 0 by Javascript
NaN
false
null
undefined
```

## Logical Operators

```
! (Logical Not)
!true; // returns false

&& (Logical AND)
Only evaluates to true if all operands are truthty

|| (Logical OR)
Only evaluates to false when both operands are falsy, otherwise, true
```

## Comparison

## Equality

```
const answer = 5;
<< 5
```

## Soft Equality

```
answer == 5;
<< true

answer == '5';
<< true
```

## Hard Equality

Tests for equality but only returns true if and only if they are of the same data type

```
answer === 5;
<< true

answer === '5';
<< false

Excemption

NaN === NaN;
<< false

Instead use Number.isNaN(NaN);
<< true
```

> A javascript ninja should always use hard equality when testing if two values are equal. Explicitly convert a number represented as string rather than relying on Javascript type coercion.

```
Number('5') === 5;
<< true
```

## Greater Than and Less Than

> There are no "hard" greater-than or equal-to operators, so an alternative way to avoid type coercion is to use a combination of the greater-than operator, logical OR, and a hard equality:

```
8 >= '8'; // soft greater-than equality
<< true

8 > 8 || 8 === 8;
<< true

8 > '8' || 8 === '8'
<< false
```

> These operators can also be used with strings

```
'apples' < 'bananas';
>> true

Case sensitive

'apples' < 'Bananas'
>> false
```

## Summary

- Comments are ignored by the program, but make your program easier to read
  and understand
- Data types are the basic building blocks of all JavaScript programs.
- There are six primitive data types: strings, symbols, numbers, Booleans,
  undefined and null.
- Non-primitive data types, such as arrays, functions and objects, all have a type
  of object .
- Variables point to values stored in memory and are declared using the const
  or let keywords.
- Values are assigned to variables using the = operator.
- Strings and numbers have various properties and methods that provide
  information about them.
- Symbols are unique, immutable values.
- Boolean values are either true or false .
- There are only seven values that are false in JavaScript and these are known
  as falsy values.
- Data types can be converted into other data types.
- Type coercion is when JavaScript tries to convert a value into another data
  type in order to perform an operation.
- Logical operators can be used to check if compound statements are true or
  false.
- Values can be compared to see if they are equal, greater than or less than other
  values.

## Arrays, Logic, and Loops

## Arrays

An array is an ordered list of values.

# Declaration

```
const myArray = [];

or

const myArray = new Array();

typof [];

>> 'object'
```

# Adding Values to Arrays

```
heroes[0] = 'Spida';
heroes.push('Dr. Strange');

>> ['Spida' ,'Dr. Strange'];
```

# Destructuring Array

```
const [x, y] = [1, 3];

x
>> 1

y
>> 3

swapping values

[x, y] = [y, x];

x
>> 3

y
>> 1
```

# Array Properties and Methods

```
const myArray = [0, 1, 2];

>> 3

Pop, Push, Shift, Unshift

Pop - remove the last item from an array
Shift - removes the first item from an array
Push - appends a new value to the end of an array
Unshift - appends a new item to the beginning of an array
```

# Merging arrays

> concat method

```
let myArray = [1, 2];
myArray.concat(3);
myArray.concat([4, 5])
>> [1, 2, 3, 4, 5]
```

> join method

```
default separator is comma (,), but other symbols can be used as well

let myArray = ['one', 'two', 'three']
myArray.join(' & ');
>> 'one & two & three'
```

# Slicing and Splicing

```
let arr_slice = [1, 2, 3, 4, 5];
arr_slice.slice(2, 4); // starts at the third item (index of 2) and finishes at the fourth (the item with index 4 is not included)

>> [ 3, 4 ]

splice()

>> index to start with; how many items; replacement
arr_slice.splice(3, 1, 6); // removes 4 then inserts 6
>> [ 1, 2, 3, 6, 5 ]
```

# Reverse

```
arr.reverse();
```

# Sort

```
arr.sort();
```

# Finding if a Value is in an Array

```
arr.indexOf(3); >> 2 // returns negative -1 if not found
arr.includes(3); >> true
```

# Multidimensional Arrays

```
const coordinates = [[1, 2, 3], ['a', 'b']];
```

# Sets

ES6. Represents a collection of unique values.

```
const list = new Set();
list.add(1);
>> Set { 1 }

list.add(2).add(3).add(4);
>> SET { 1, 2, 3, 4 }

list.add(1); // ignored

const listNumbers = new Set([1, 1, 1, 1]);
>> Set { 1 }
const letters = new Set('hello');
>> Set { 'h', 'e', 'l', 'o' }

const arrays = new Set().add([1]).add([1]); // allows duplicate, same array, but considered different objects
>> Set { [1], [1] }

[1] === [1];
>> false

type coercion is not used
const mixedTypes = new Set().add(2).add('2');
>> Set { 2, '2' }

mixedType.size();
>> 2

mixedType.has(2);
>> true

Removing value from Set
mixedTypes.delete(2);
>> Set { '2' }

Remove all
mixedTypes.clear();

Converting Set to Array
const s =  new Set().add(1).add(2);

>> ... or the spread operator

[...s];
>> [ 1, 2 ]

or

Array.from(s);
>> [ 1, 2 ]

const nonDuplicate = [...new Set(arraysWithDuplicates)]; // removes duplicate; converts to array
```

# Memory Leaks

> Memory leaks occurs when a program retains references to values that can no longer be accessed in its memory

```

let array = [1,2,3];
const strong = new Set().add(array);
array = null; // remove reference to the original
strong
<< Set { [ 1, 2, 3 ] }

The array still exists inside the set and we can get the original value of array
back using the spread operator:
array = [...strong][0];

<< [1,2,3]

```
