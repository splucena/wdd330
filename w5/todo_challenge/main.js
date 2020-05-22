import Todos from './todos.js';

let t = new Todos([]);
//t.createTodosStorage('testTodo', [{
//    'id': 1,
//    'name': 'Sum'
//}])
const todoList = t.getTodos('todos');
//console.log(todoList);
//t.renderTodoList(todoList, '#todo-list');
//t.addTodo();

//let todoContent = document.querySelector('#todo-input-create').value;
//console.log(todoContent + " main");
// Add event to todo-btn-create
//const createTodo = document.querySelector('#todo-btn-create');
//createTodo.addEventListener('click', t.addTodo);