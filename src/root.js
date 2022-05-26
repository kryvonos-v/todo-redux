import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { Router } from './router/router';

export function Root({ store }) {
  return (
    // <StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    // </StrictMode>
  );
}
