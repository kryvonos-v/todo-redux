export const promise = () => next => action => {
  if (action instanceof Promise) {
    return action.then(next);
  }

  return next(action);
};

export function xPromise(next) {
  return (action) => {
    if (action instanceof Promise) {
      return action.then(next);
    }

    return next(action);
  };
}
