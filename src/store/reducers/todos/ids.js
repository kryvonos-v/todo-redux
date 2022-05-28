import { combineReducers } from "redux";

export default function ids(filter) {
  function list(state = [], action) {
    if (filter !== action.filter) {
      return state;
    }

    switch (action.type) {
      case 'RECEIVE_TODOS':
        return action.data.map(item => item.id);

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
