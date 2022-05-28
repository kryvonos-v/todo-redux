import { combineReducers } from "redux";

export default function ids(filter) {
  function list(state = [], action) {
    switch (action.type) {
      case 'RECEIVE_TODOS':
        return (filter === action.filter)
          ? action.data.map(item => item.id)
          : state;

      case 'ADD_TODO':
        return (filter !== 'completed')
          ? [...state, action.id]
          : state;

      default:
        return state;
    }
  };

  function isFetching(state = false, action) {
    if (filter !== action.filter) {
      return state;
    }

    switch (action.type) {
      case 'REQUEST_TODOS':
        return true;
      
      case 'RECEIVE_TODOS':
        return false;

      default:
        return state;
    }
  }

  return combineReducers({
    list,
    isFetching
  });
}

export const getIds = state => state.list;
export const getIsFetching = state => state.isFetching;
