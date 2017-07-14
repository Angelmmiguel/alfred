import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.css';

// Containers
import Dashboard from './containers/Dashboard';

// Service Worker for caching
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Dashboard />,
  document.getElementById('root')
);

registerServiceWorker();
