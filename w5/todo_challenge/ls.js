export function utilCreateLocalStorage(name, value) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));
}

export function utilGetLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
}