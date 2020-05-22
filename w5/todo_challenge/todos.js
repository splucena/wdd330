import {
    Todo
} from './todo.js';

import {
    utilCreateLocalStorage,
    utilGetLocalStorage
} from './ls.js';

//let todo1 = new Todo('test', false);
//let todo2 = new Todo('test1', false);
//let todo3 = new Todo('test2', false);

//let todos = [todo1, todo2, todo3];

//debugger;
//localStorage.setItem('todos', JSON.stringify(todos));
// localStorage.todos = JSON.stringify(todos);
//console.log(JSON.stringify())

//let newTodoList = JSON.parse(localStorage.getItem('todos'));
// JSON.parse(localStorage.todos);
//newTodoList.push(new Todo('test3', false));
//localStorage.todos = JSON.stringify(newTodoList);
//console.log(newTodoList);

export default class Todos {
    constructor(todoList = null) {
        this.todoList = todoList;

        document.querySelector('#todo-btn-create').addEventListener('click', e => {
            this.addTodo();
        });
        this.renderTodoList(this.getTodos('todos'), '#todo-list');
    }

    addTodo() {
        let todoContent = document.querySelector('#todo-input-create').value;
        let todoItem = new Todo(todoContent);
        this.saveTodo(todoItem, "todos");
    }

    renderTodoList(list, element) {
        const todoList = document.querySelector(element);
        todoList.innerHTML = '';

        list.forEach((element, index) => {
            let todoItem = document.createElement('li');
            todoItem.classList.add('todo-item');

            let markItem = document.createElement('input');
            markItem.setAttribute('type', 'checkbox');
            let itemContent = document.createElement('div');
            itemContent.innerHTML = element['content'];
            todoItem.appendChild(markItem);
            todoItem.appendChild(itemContent);
            todoList.appendChild(todoItem);
        });
    }

    saveTodo(task, key) {
        utilCreateLocalStorage(key, task);
        const list = this.getTodos(key);
        this.renderTodoList(list, '#todo-list');
    }

    getTodos(key) {
        return utilGetLocalStorage(key);
    }

    listTodos(name) {
        //return utilGetLocalStorage(name);
    }

    completeTodo() {}

    removeTodo() {}

    filterTodos() {}
}