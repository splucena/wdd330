export default class TodoView {
    constructor() {}

    renderTodoList(todoList, parentElement) {
        // clear list
        parentElement.innerHTML = '';
        //console.log(todoList);
        // loop through todos
        // render each item one at a time
        todoList.forEach(todo => {
            parentElement.appendChild(this.renderTodoItem(todo));
        });
    }

    renderTodoItem(todo) {
        //console.log(todo);
        const todoItem = document.createElement('li');
        const chkBox = document.createElement('input');
        chkBox.setAttribute('type', 'checkbox');
        chkBox.setAttribute('id', `${todo.id}`);
        chkBox.checked = todo.completed;

        const contentDiv = document.createElement('div');
        contentDiv.setAttribute('id', `contentDiv-${todo.id}`)
        contentDiv.innerHTML = todo.content;
        const removeButton = document.createElement('button');
        removeButton.setAttribute('id', `${todo.id}`);
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