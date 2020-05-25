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

        if (completed === null || (completed && todo.completed) || (!completed && !todo.completed)) {
            const todoItem = document.createElement('li');
            todoItem.classList.add('todo-item');
            // create label
            const label = document.createElement('label');
            label.classList.add('container')

            const chkBox = document.createElement('input');
            chkBox.setAttribute('type', 'checkbox');
            chkBox.setAttribute('id', `${todo.id}`);
            chkBox.checked = todo.completed;
            label.appendChild(chkBox)

            const span = document.createElement('span');
            span.setAttribute('id', `span-${todo.id}`);

            if (todo.completed) {
                span.classList.add('checkmark');
            }
            //span.classList.add('checkmark');
            label.appendChild(span);

            const contentDiv = document.createElement('div');
            contentDiv.setAttribute('id', `contentDiv-${todo.id}`)
            contentDiv.innerHTML = todo.content;
            if (todo.completed) {
                contentDiv.classList.add('horizontal-line');
            }
            const removeButton = document.createElement('button');
            removeButton.setAttribute('id', `${todo.id}`);
            removeButton.classList.add('todo-remove-item');
            //removeButton.innerHTML = 'x';

            //todoItem.appendChild(chkBox);
            todoItem.appendChild(label);
            todoItem.appendChild(contentDiv);
            todoItem.appendChild(removeButton);
            todoItem.setAttribute('data-name', todo.id);
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