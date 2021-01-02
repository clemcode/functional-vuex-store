export const getUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => err);

export const getTodos = () =>
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .catch((err) => err);
