export class Todo {
    constructor(content, completed = false) {
        this.id = Date.now();
        this.content = content;
        this.completed = completed;
    }
}