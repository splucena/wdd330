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

    setTodoComplete(id, key, value) {
        let todos = this.getAllTodos();
        let index = todos.findIndex(todo => todo.id === Number(id));
        console.log(typeof id);
        console.log(todos);
        console.log(index);
        todos[index].completed = value;
        localStorage.setItem(key, JSON.stringify(todos));
    }

    getLocalStorageTodo(id) {
        //const todos = this.getAllTodos();
        //let todo = todos.find(todo => todo.id === id);
        //todos
    }

    getAllTodos() {
        return JSON.parse(localStorage.getItem('todos'));
    }
}