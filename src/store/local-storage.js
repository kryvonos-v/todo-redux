import { throttle } from 'lodash';

const PERSIST_STATE = true;

const STATE_KEY = 'state';

export function persist(initStore) {
  const store = initStore(loadState());
  
  if (PERSIST_STATE) {
    store.subscribe(throttle(() => {
      const state = store.getState();
      saveState({
        todos: state.todos
      });
    }, 1000));
  }

  return store;
}

export function loadState() {
  try {
    const serializedState = localStorage.getItem(STATE_KEY);
    return JSON.parse(serializedState) || undefined;
  } catch (err) {
    // do nothing ...
  }
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, serializedState);
  } catch (err) {
    // do nothing...
  }
}
