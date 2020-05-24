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

        // filter buttons
        this.filterAll = document.querySelector('#filterAllTodos');
        this.filterActive = document.querySelector('#filterActiveTodos');
        this.filterCompleted = document.querySelector('#filterCompletedTodos');

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
        if (completed === null) {
            this.filterAll.classList.add('border-all');
            this.filterActive.classList.remove('border-all');
            this.filterCompleted.classList.remove('border-all');
        }
    }

    filterAllTodos() {
        const all = this.filterAll;

        all.addEventListener('click', (e) => {
            this.showAllTodos();
            this.filterActive.classList.remove('border-all');
            this.filterCompleted.classList.remove('border-all');
        })
    }

    filterActiveTodos() {
        const active = this.filterActive;

        active.addEventListener('click', (e) => {
            this.showAllTodos(false);
            active.classList.add('border-all');
            this.filterAll.classList.remove('border-all');
            this.filterCompleted.classList.remove('border-all');
        })
    }

    filterCompletedTodos() {
        const completed = this.filterCompleted;
        completed.addEventListener('click', (e) => {
            this.showAllTodos(true);
            completed.classList.add('border-all');
            this.filterAll.classList.remove('border-all');
            this.filterActive.classList.remove('border-all');
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
                contentDiv.classList.toggle('horizontal-line');
                this.todoModel.setTodoComplete(clickedElementId, this.key, e.target.checked);
                // update completed to true
            } else if (clickedElementType === 'submit') { // submit
                this.todoModel.removeTodoItem(clickedElementId, this.key);
                this.showAllTodos();
            }
        }, false)
    }
}