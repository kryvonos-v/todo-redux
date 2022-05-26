export const logger = store => next => {
  if (!console.group) {
    return next;
  }

  return action => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const value = next(action);
    console.log('%c new state', 'color: green', store.getState())
    console.groupEnd(action.type);
  
    return value;
  };
}

export function xLogger(next, store) {
  if (!console.group) {
    return next;
  }

  return action => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const value = next(action);
    console.log('%c new state', 'color: green', store.getState())
    console.groupEnd(action.type);

    return value;
  };
}
