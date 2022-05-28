import todos from '../mocked-data/todos.json';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function fetchTodos(filter) {
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
