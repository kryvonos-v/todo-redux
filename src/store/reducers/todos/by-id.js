import { idsMap } from '../../../libs/helpme';

export default function byId(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      return {
        ...state,
        ...idsMap(action.data)
      };

    default:
      return state;
  }
}

export const getTodo = (state, id) => state[id];
