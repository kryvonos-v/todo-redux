import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos/todos';

export default combineReducers({
  todos
});

export const getVisibleTodos = (state, filter) => fromTodos.getVisibleTodos(state.todos, filter);
export const getIsFetching = (state, filter) => fromTodos.getIsFetching(state.todos, filter);