import { combineReducers } from "redux";

export default function ids(filter) {
  function list(state = [], action) {
    switch (action.type) {
      case 'FETCH_TODOS_SUCCESS':
        return (filter === action.filter)
          ? action.data.result
          : state;

      case 'ADD_TODO':
        return (filter !== 'completed')
          ? [...state, action.data.result]
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
      case 'FETCH_TODOS_REQUEST':
        return true;
      
      case 'FETCH_TODOS_SUCCESS':
      case 'FETCH_TODOS_FAILURE':
        return false;

      default:
        return state;
    }
  }

  function errorMessage(state = '', action) {
    if (filter !== action.filter) {
      return state;
    }

    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
        return '';

      case 'FETCH_TODOS_FAILURE':
        return action.errorMessage;

      default:
        return state;
    }
  }

  return combineReducers({
    list,
    isFetching,
    errorMessage
  });
}

export const getIds = state => state.list;
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;
