export default function byId(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_TODOS':
    case 'ADD_TODO':
      return {
        ...state,
        ...action.data.entities.todos
      };

    default:
      return state;
  }
}

export const getTodo = (state, id) => state[id];
