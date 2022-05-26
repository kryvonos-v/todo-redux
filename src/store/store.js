import { applyMiddleware, combineReducers, createStore } from 'redux';
import todos, * as fromTodos from './modules/todos/todos';
import { logger, promise } from './middlewares';

const LOGGER_ENABLED = true;

const reducers = combineReducers({
  todos
});

export function configureStore() {
  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production' && LOGGER_ENABLED) {
    middlewares.push(logger);
  }

  return createStore(
    reducers,
    applyMiddleware(...middlewares)
  );
}

export const getVisibleTodos = (state, filter) => fromTodos.getVisibleTodos(state.todos, filter);
