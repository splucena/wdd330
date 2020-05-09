import {
    Student
} from './student.js';

let student = new Student();
student.age = null;

let students = [];
let s = new Student('Sum', 'Plucena');
s.age = 36;
let e = new Student('John', 'Smith');
e.age = 14;
let r = new Student('Anna', 'Scott');
r.age = 27;

students.push(s);
students.push(e);
students.push(r);

console.table(students);

let section = document.querySelector('section');
let ul = document.createElement('ul');
students.forEach((student) => {
    let li = document.createElement('li');
    let name = `${student.firstName} ${student.lastName} - ${student.age}`;
    li.innerHTML = name;
    ul.appendChild(li);
})
section.appendChild(ul);

students.sort((x, y) => {
    return x.age < y.age ? -1 : 1;
})

console.table(students);