import { applyMiddleware, createStore } from 'redux';
import { logger, promise } from './middlewares';
import reducers from './reducers';

const LOGGER_ENABLED = true;

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
