import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router5';
import { Provider } from 'react-redux';

// Containers
import App from './containers/App';

// Router
import createRouter from './router';

// Redux
import configureStore from './stores';

// Service Worker for caching
import registerServiceWorker from './registerServiceWorker';

// Set the store
const router = createRouter(true);
const store = configureStore(router);
router.start();

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
