import Todos from './todos.js';

let t = new Todos();
//t.createTodosStorage('testTodo', [{
//    'id': 1,
//    'name': 'Sum'
//}])
const todoList = t.getTodos('todos');
console.log(todoList);
t.renderTodoList(todoList, '#todo-list');