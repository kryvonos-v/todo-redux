import { getIsFetching } from '../';
import * as api from '../../../api/api';

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
    data
  });
};

export const addTodo = (text) => (dispatch) => (
  api.addTodo(text).then(todo => dispatch({
    type: 'ADD_TODO',
    ...todo
  })));

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
