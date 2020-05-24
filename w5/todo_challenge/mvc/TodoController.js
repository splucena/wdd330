import TodoModel from './TodoModel.js';
import TodoView from './TodoView.js'

export default class TodoController {
    constructor(parentElement) {
        this.parentElement = document.querySelector(parentElement);
        this.todoView = new TodoView();
        this.todoModel = new TodoModel();
        this.key = 'todos';

        this.addTodoEvent();
        this.parentEvent();
        //this.parentEvent(parentElement);
    }

    showAllTodos() {
        //const todoModel = new TodoModel();
        const todoList = this.todoModel.getAllTodos(this.key);
        this.todoView.renderTodoList(todoList, this.parentElement);
        this.todoView.renderTodoCount(this.key, '#todoCount');
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

    parentEvent() {
        this.parentElement.addEventListener('click', (e) => {
            e.preventDefault;
            const clickedElementId = e.target.id;
            const clickedElementType = e.target.type;
            //console.log(clickedElementType);
            if (clickedElementType === 'checkbox') {
                const contentDiv = document.querySelector(`#contentDiv-${clickedElementId}`);
                // underline div
                contentDiv.classList.toggle('red');
                this.todoModel.setTodoComplete(clickedElementId, this.key, e.target.checked);
                // update completed to true
            } else { // submit
                console.log(clickedElementType);
                this.todoModel.removeTodoItem(clickedElementId, this.key);
                this.showAllTodos();
            }
        }, false)
    }
}