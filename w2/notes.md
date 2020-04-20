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
