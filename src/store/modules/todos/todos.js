import { combineReducers } from 'redux';
import todo from './todo';
export * from './todos.actions';

export default combineReducers({
  byIds,
  ids
});

function byIds(state = {}, action) {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
    case 'UPDATE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };

    case 'REMOVE_TODO':
      const {
        [action.id]: removedTodo,
        ...newState
      } = state;

      return newState;
    
    default:
      return state;
  }
}

function ids(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id];
    
    case 'REMOVE_TODO':
      return state.filter(id => id !== action.id);

    default:
      return state;
  }
}

function getTodos(state) {
  return state.ids.map(id => state.byIds[id]);
}

export function getVisibleTodos(state, visibilityFilter) {
  const todos = getTodos(state);

  switch (visibilityFilter) {
    case 'all':
      return todos;

    case 'completed':
      return todos.filter(item => item.completed);
    
    case 'incompleted':
      return todos.filter(item => !item.completed);

    default:
      return todos;
  }
}
