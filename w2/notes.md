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
