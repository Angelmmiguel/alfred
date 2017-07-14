import React from 'react';
import PropTypes from 'prop-types';

// Utils
import fetch from '../../shared/fetch';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      loading: true,
    }
  }

  componentDidMount() {
    fetch('jobs').then((data) => {
      if (data.error) {
        this.setState({loading: false});
      } else {
        this.setState({loading: false, jobs: data.body.jobs});
      }
    });
  }

  render() {
    return <div>
      <h1>Dashboard</h1>
      <p>Loading: { this.state.loading.toString() }</p>
      <ul>
        { this.state.jobs.map((el) => <li key={el.name}>{el.name}</li>  )}
      </ul>
    </div>;
  };
}

export default Dashboard;
