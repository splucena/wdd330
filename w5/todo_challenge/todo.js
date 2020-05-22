export class Todo {
    constructor(content, completed) {
        this.id = Date.now();
        this.content = content;
        this.completed = completed;
    }
}