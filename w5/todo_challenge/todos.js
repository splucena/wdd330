import {
    Todo
} from './todo.js';

let todo1 = new Todo('test', false);
let todo2 = new Todo('test1', false);
let todo3 = new Todo('test2', false);

let todos = [todo1, todo2, todo3];

//debugger;
localStorage.setItem('todos', JSON.stringify(todos));
// localStorage.todos = JSON.stringify(todos);
//console.log(JSON.stringify())

let newTodoList = JSON.parse(localStorage.getItem('todos'));
// JSON.parse(localStorage.todos);
newTodoList.push(new Todo('test3', false));
localStorage.todos = JSON.stringify(newTodoList);
console.log(newTodoList);