import {
    Todo
} from './todo.js';

import {
    utilCreateLocalStorage,
    utilGetLocalStorage
} from './ls.js';

//let todo1 = new Todo('test', false);
//let todo2 = new Todo('test1', false);
//let todo3 = new Todo('test2', false);

//let todos = [todo1, todo2, todo3];

//debugger;
//localStorage.setItem('todos', JSON.stringify(todos));
// localStorage.todos = JSON.stringify(todos);
//console.log(JSON.stringify())

//let newTodoList = JSON.parse(localStorage.getItem('todos'));
// JSON.parse(localStorage.todos);
//newTodoList.push(new Todo('test3', false));
//localStorage.todos = JSON.stringify(newTodoList);
//console.log(newTodoList);

export default class Todos {
    createTodosStorage(name, value) {
        utilCreateLocalStorage(name, value)
    }

    addTodo(content, completed) {
        return new Todo(content, completed);
    }

    renderTodoList(list, element) {
        const todoList = document.querySelector(element);
        list.forEach((todoItem, index) => {
            const li = document.createElement("li");
            li
                .classList
                .add("todo-item");
            const checkBox = document.createElement("input");
            checkBox.setAttribute("type", "checkbox");
            checkBox.setAttribute("id", `chk-${index}`);

            li.appendChild(checkBox);
            const div = document.createElement("div");
            div.setAttribute("id", `div-${index}`);
            console.log(index, todoItem["content"]);
            div.innerHTML = todoItem["content"];
            li.appendChild(div);
            const removeTodoItem = document.createElement("button");
            //removeTodoItem.innerHTML = "X";
            removeTodoItem.classList.add('todo-remove-item');
            removeTodoItem.setAttribute("id", `btn-${index}`);
            removeTodoItem.addEventListener("click", function () {
                list.splice(index, 1);
                localStorage.setItem("todos", JSON.stringify(list));
            });
            li.appendChild(removeTodoItem);

            checkBox.addEventListener('change', function () {
                let todoItem = document.querySelector(`#div-${index}`);
                if (this.checked) {
                    //todoItem
                    //    .classList
                    //    .add('horizontal-line');
                    //list[index]['completed'] = true;
                    localStorage.setItem("todos", JSON.stringify(list));
                } else {
                    //todoItem
                    //    .classList
                    //    .remove('horizontal-line');
                    //list[index]['completed'] = false;
                    localStorage.setItem("todos", JSON.stringify(list));
                }
                //checkBox.classList.toggle('horizontal-line');
                todoItem.classList.toggle('horizontal-line');
            });
            todoList.insertBefore(li, todoList.childNodes[index]);

            // task left
            let todo_task_left = document.querySelector("#todo-task-left");
            todo_task_left.innerHTML = index + 1 + " task left";
            //https://gomakethings.com/how-to-update-localstorage-with-vanilla-javascript/
            //https://medium.com/better-programming/how-to-use-local-storage-with-javascript-9598834c8b72
            //http://archive.oreilly.com/oreillyschool/courses/javascript2/TodoAppWithLocalStorage.html
        });
    }

    saveTodo(task, key) {}

    getTodos(key) {
        return utilGetLocalStorage(key);
    }

    listTodos(name) {
        //return utilGetLocalStorage(name);
    }

    completeTodo() {}

    removeTodo() {}

    filterTodos() {}
}