import { getIsFetching } from '../';
import { normalize } from 'normalizr';
import * as api from '../../../api/api';
import * as schema from '../../../schema/todo';

export const fetchTodos = (filter) => async (dispatch, state) => {
  if (getIsFetching(state, filter)) {
    return;
  }

  dispatch({
    type: 'REQUEST_TODOS',
    filter
  });

  const data = await api.fetchTodos(filter);

  dispatch({
    type: 'RECEIVE_TODOS',
    filter,
    data: normalize(data, schema.todoList)
  });
};

export const addTodo = (text) => (dispatch) => (
  api.addTodo(text).then(todo => {
    dispatch({
      type: 'ADD_TODO',
      data: normalize(todo, schema.todo)
    });
  }))

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
