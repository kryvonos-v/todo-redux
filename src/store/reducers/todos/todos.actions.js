import { v4 } from 'uuid';
import * as api from '../../../api/api';

export const fetchTodos = filter => (
  api.fetchTodos(filter).then(data => ({
    type: 'RECEIVE_TODOS',
    filter,
    data
  }))
);

export const requestTodos = filter => ({
  type: 'REQUEST_TODOS',
  filter
});

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id
});

export const udpateTodo = (props) => ({
  type: 'UPDATE_TODO',
  ...props
});
