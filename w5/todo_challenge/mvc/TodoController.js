import TodoModel from './TodoModel.js';
import TodoView from './TodoView.js'

export default class TodoController {
    constructor(parentElement) {
        this.parentElement = document.querySelector(parentElement);
        this.todoView = new TodoView();
        this.todoModel = new TodoModel();

        this.addTodoEvent();
        this.parentEvent();
        //this.parentEvent(parentElement);
    }

    showAllTodos() {
        //const todoModel = new TodoModel();
        const todoList = this.todoModel.getAllTodos();
        this.todoView.renderTodoList(todoList, this.parentElement);
    }

    addTodoEvent() {
        document.querySelector('#addTodo').addEventListener('click', (e) => {
            const content = document.querySelector('#todoContent');
            if (content === '') {
                alert('Invalid input.')
            } else {
                this.todoModel.content = content.value;
                this.todoModel.addTodo('todos');
                content.value = '';
                this.showAllTodos();
            }
        })
    }

    parentEvent() {
        this.parentElement.addEventListener('click', (e) => {
            e.preventDefault;
            const clickedElement = e.target.id;
            console.log(clickedElement);
        }, false)
    }
}