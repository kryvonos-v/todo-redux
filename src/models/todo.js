import { arrayOf, bool, shape, string } from 'prop-types';

export const Todo = shape({
  id: string.isRequired,
  text: string.isRequired,
  completed: bool.isRequired
});

export const TodoList = arrayOf(Todo);
