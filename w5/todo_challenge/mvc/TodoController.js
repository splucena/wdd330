import TodoModel from './TodoModel.js';
import TodoView from './TodoView.js'

export default class TodoController {
    constructor(parentElement) {
        this.parentElement = document.querySelector(parentElement);
        this.todoView = new TodoView();
        this.todoModel = new TodoModel();
        this.key = 'todos';
        //this.filterStatus = 'all';

        this.addTodoEvent();
        this.todoListEvent();
        //this.parentEvent(parentElement);
        this.filterAllTodos();
        this.filterActiveTodos();
        this.filterCompletedTodos();
    }

    showAllTodos(completed = null) {
        //const todoModel = new TodoModel();
        const todoList = this.todoModel.getAllTodos(this.key);
        this.todoView.renderTodoList(todoList, this.parentElement, completed);
        this.todoView.renderTodoCount(this.key, '#todoCount', completed);
    }

    filterAllTodos() {
        document.querySelector('#filterAllTodos').addEventListener('click', (e) => {
            this.showAllTodos();
            //this.filterStatus = 'all';
        })
    }

    filterActiveTodos() {
        document.querySelector('#filterActiveTodos').addEventListener('click', (e) => {
            this.showAllTodos(false);
            //this.filterStatus = 'active';
        })
    }

    filterCompletedTodos() {
        document.querySelector('#filterCompletedTodos').addEventListener('click', (e) => {
            this.showAllTodos(true);
            //this.filterStatus = 'completed';
        })
    }

    addTodoEvent() {
        document.querySelector('#addTodo').addEventListener('click', (e) => {
            const content = document.querySelector('#todoContent');
            if (content === '') {
                alert('Please enter a todo task.');
            } else {
                this.todoModel.id = Date.now();
                this.todoModel.content = content.value;
                this.todoModel.addTodo('todos');
                content.value = '';
                this.showAllTodos();
            }
        })
    }

    todoListEvent() {
        this.parentElement.addEventListener('click', (e) => {
            e.preventDefault;
            const clickedElementId = e.target.id;
            const clickedElementType = e.target.type;
            if (clickedElementType === 'checkbox') {
                const contentDiv = document.querySelector(`#contentDiv-${clickedElementId}`);
                // underline div
                contentDiv.classList.toggle('red');
                this.todoModel.setTodoComplete(clickedElementId, this.key, e.target.checked);
                // update completed to true
            } else { // submit
                this.todoModel.removeTodoItem(clickedElementId, this.key);
                this.showAllTodos();
            }
        }, false)
    }
}