import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from 'redux-router5';

// Actions
import { saveJobs } from '../../actions/jenkins';

// Components
import Navigation from '../../components/Navigation';
import JobRow from '../../components/JobRow';
import Title from '../../components/Title';
import Content from '../../components/Content';

// Styles
import './Configuration.css';

// Utils
import fetch from '../../shared/fetch';

class Configuration extends React.Component {

  constructor(props) {
    super(props);

    // Binds
    this.onEditClick = this.onEditClick.bind(this);

    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    fetch('jobs').then((data) => {
      if (data.error) {
        this.setState({loading: false});
      } else {
        this.props.saveJobs(data.body.jobs);
        this.setState({loading: false});
      }
    });
  }

  onEditClick(jobName) {
    this.props.navigateTo('configurationJob', { job: jobName });
  }

  render() {
    return <section className="Configuration">
      <Navigation />
      <Content>
        <Title>
          Jobs
        </Title>
        <table className="Configuration__JobTable">
          <thead>
            <tr>
              <td>Name</td>
              <td>Category</td>
              <td>Priority</td>
              <td>SLA</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            { this.props.jobs.map((el) => {
              return <JobRow key={el.name} className="Configuration__Job" { ...el }
                onEditClick={ this.onEditClick }/>;
            })}
          </tbody>
        </table>
      </Content>
    </section>;
  };
}

export default connect((state) => {
    return {
      jobs: state.jenkins.jobs,
    }
  },
  (dispatch) => bindActionCreators({
                  navigateTo: actions.navigateTo,
                  saveJobs: saveJobs
                }, dispatch)
)(Configuration);
