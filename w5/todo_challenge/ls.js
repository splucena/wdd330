export function utilCreateLocalStorage(name, value) {
    return localStorage.setItem(name, JSON.stringify(value));
}

export function utilGetLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
}