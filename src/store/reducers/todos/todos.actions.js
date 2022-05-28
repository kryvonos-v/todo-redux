import { v4 } from 'uuid';
import { getIsFetching } from '../';
import * as api from '../../../api/api';

const requestTodos = filter => ({
  type: 'REQUEST_TODOS',
  filter
});

const receiveTodos = (filter, data) => ({
  type: 'RECEIVE_TODOS',
  filter,
  data
});

export const fetchTodos = filter => async (dispatch, state) => {
  if (getIsFetching(state, filter)) {
    return;
  }

  dispatch(requestTodos(filter));
  const data = await api.fetchTodos(filter);
  dispatch(receiveTodos(filter, data));
};

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
