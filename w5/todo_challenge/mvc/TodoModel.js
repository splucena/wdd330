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
            todos = this.getAllTodos(key);
        }
        todos.push({
            'id': this.id,
            'content': this.content,
            'completed': this.completed
        });
        // save changes to local storage
        this.setLocalStorage(key, todos);
    }

    setTodoComplete(id, key, value) {
        let todos = this.getAllTodos(key);
        let index = todos.findIndex(todo => todo.id === Number(id));
        todos[index].completed = value;
        // save changes to local storage
        this.setLocalStorage(key, todos);
    }

    removeTodoItem(id, key) {
        let todos = this.getAllTodos(key);
        let index = todos.findIndex(todo => todo.id === Number(id));
        todos.splice(index, 1);
        // save changes to local storage
        this.setLocalStorage(key, todos);
    }

    setLocalStorage(key, todos) {
        return localStorage.setItem(key, JSON.stringify(todos));
    }

    getAllTodos(key) {
        if (JSON.parse(localStorage.getItem(key) === null)) {
            return [];
        }
        return JSON.parse(localStorage.getItem(key));
    }
}