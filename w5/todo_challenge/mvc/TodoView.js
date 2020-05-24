export default class TodoView {
    constructor() {}

    renderTodoList(todoList, parentElement) {
        // clear list
        parentElement.innerHTML = '';
        console.log(todoList);
        // loop through todos
        // render each item one at a time
        todoList.forEach(todo => {
            parentElement.appendChild(this.renderTodoItem(todo));
        });
    }

    renderTodoItem(todo) {
        console.log(todo);
        const todoItem = document.createElement('li');
        const chkBox = document.createElement('input');
        chkBox.setAttribute('type', 'checkbox');
        chkBox.setAttribute('id', `chkBox-${todo.id}`)
        const contentDiv = document.createElement('div');
        contentDiv.innerHTML = todo.content;
        const removeButton = document.createElement('button');
        removeButton.setAttribute('id', `btn-${todo.id}`);
        removeButton.innerHTML = 'x';

        todoItem.appendChild(chkBox);
        todoItem.appendChild(contentDiv);
        todoItem.appendChild(removeButton);
        todoItem.setAttribute('data-name', todo.id);

        // send back elements to controller to attach a listener
        //return [chkBox, removeButton];
        return todoItem;
    }
}