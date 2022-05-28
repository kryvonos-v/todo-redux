import { combineReducers } from 'redux';
import byId, { getTodo } from './by-id';
import ids, * as fromIds from './ids';

export default combineReducers({
  byId,
  ids: combineReducers({
    all: ids('all'),
    active: ids('active'),
    completed: ids('completed')
  })
});

export function getVisibleTodos(state, filter) {
  const ids = fromIds.getIds(state.ids[filter]);
  return ids.map(id => getTodo(state.byId, id));
}

export function getIsFetching(state, filter) {
  return fromIds.getIsFetching(state.ids[filter]);
}
