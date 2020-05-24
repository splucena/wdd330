import TodoModel from './TodoModel.js';
export default class TodoView {
    constructor() {}

    renderTodoList(todoList, parentElement, completed = null) {
        // clear list
        parentElement.innerHTML = '';
        // loop through todos
        // render each item one at a time
        todoList.forEach(todo => {
            const todoItem = this.renderTodoItem(todo, completed);
            //parentElement.appendChild(this.renderTodoItem(todo, completed));
            if (todoItem) {
                parentElement.appendChild(todoItem);
            }
        });
    }

    renderTodoItem(todo, completed = null) {
        //console.log(todo);
        const todoItem = document.createElement('li');
        const chkBox = document.createElement('input');
        chkBox.setAttribute('type', 'checkbox');
        chkBox.setAttribute('id', `${todo.id}`);
        chkBox.checked = todo.completed;

        const contentDiv = document.createElement('div');
        contentDiv.setAttribute('id', `contentDiv-${todo.id}`)
        contentDiv.innerHTML = todo.content;
        if (todo.completed) {
            contentDiv.classList.add('red');
        }
        const removeButton = document.createElement('button');
        removeButton.setAttribute('id', `${todo.id}`);
        removeButton.innerHTML = 'x';

        todoItem.appendChild(chkBox);
        todoItem.appendChild(contentDiv);
        todoItem.appendChild(removeButton);
        todoItem.setAttribute('data-name', todo.id);

        // send back elements to controller to attach a listener
        //return [chkBox, removeButton];
        if (completed === null) {
            return todoItem;
        }
        if (completed && todo.completed) {
            return todoItem;
        }
        if (!completed && !todo.completed) {
            return todoItem;
        }

        return false;
    }

    renderTodoCount(key, element, completed) {
        const todoCount = new TodoModel().getTodoCount(key, completed);
        const todoCountElement = document.querySelector(element);
        todoCountElement.innerHTML = `${todoCount} tasks left`;
    }
}