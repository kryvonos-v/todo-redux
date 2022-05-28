import { v4 } from 'uuid';
import { fakeDb } from './fake-db';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function fetchTodos(filter) {
  const todos = fakeDb.todos;

  return sleep(700).then(() => {
    switch (filter) {
      case 'all':
        return todos;

      case 'completed':
        return todos.filter(item => item.completed);

      case 'active':
        return todos.filter(item => !item.completed);

      default:
        return todos;
    }
  });
}

export function addTodo(text) {
  return sleep(700).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false
    };

    fakeDb.todos.push(todo);

    return todo;
  });
}

export function toggleTodo(id) {
  return sleep(700).then(() => {
    const todo = fakeDb.todos.find(item => item.id === id);

    if (!todo) {
      throw new Error('404: Todo with an id ' + id + ' was not found');
    }

    todo.completed = !todo.completed;
    return todo;
  });
}
