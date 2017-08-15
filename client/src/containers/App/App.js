import { createElement } from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';

// Containers
import Dashboard from '../Dashboard';
import Configuration from '../Configuration';
import ConfigurationJob from '../ConfigurationJob';
import NotFound from '../../components/NotFound';

// Containers for routes
const containers = {
  'index': Dashboard,
  'configuration': Configuration,
  'configurationJob': ConfigurationJob,
};

// Basic App routing
const App = props => {
  const { route } = props;
  const segment = route ? route.name.split('.')[0] : undefined;
  // Initialize the component
  return createElement(containers[segment] || NotFound);
}

export default connect((state) => routeNodeSelector(''))(App);
