export default class TodoModel {
    constructor(content = '', completed = false) {
        this.id = Date.now();
        this.content = content;
        this.completed = completed;
        //this.todos = [];
    }

    addTodo(key) {
        let todos;
        if (localStorage.getItem(key) === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem(key));
        }
        todos.push({
            'id': this.id,
            'content': this.content,
            'completed': this.completed
        });
        localStorage.setItem(key, JSON.stringify(todos));
    }

    getAllTodos() {
        return JSON.parse(localStorage.getItem('todos'));
    }
}