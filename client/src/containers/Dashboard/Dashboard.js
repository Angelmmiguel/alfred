import React from 'react';
import { connect } from 'react-redux';

// Actions
import { saveJobs } from '../../actions/jenkins';

// Components
import { CheckCircle, AlertCircle, Slash } from 'react-feather';
import Navigation from '../../components/Navigation';
import JobList from '../../components/JobList';
import Title from '../../components/Title';
import Content from '../../components/Content';

// Styles
import './Dashboard.css';

// Utils
import fetch from '../../shared/fetch';
import statusByColor from '../../shared/status';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    fetch('jobs').then((data) => {
      if (data.error) {
        this.setState({loading: false});
      } else {
        this.props.dispatch(saveJobs(data.body.jobs));
        this.setState({loading: false});
      }
    });
  }

  jobsByStatus(status) {
    return this.props.jobs.filter((el) => {
      let jobStatus = statusByColor(el.color).status;
      return jobStatus === status;
    })
  }

  render() {
    return <section className="Dashboard">
      <Navigation jenkinsUrl={ this.jenkinsUrl } />
      <Content>
        <Title><AlertCircle /> Failed</Title>
        <JobList jobs={ this.jobsByStatus('failed') } />
        <Title><CheckCircle /> Correct </Title>
        <JobList jobs={ this.jobsByStatus('correct') } />
        <Title><Slash /> Disabled </Title>
        <JobList jobs={ this.jobsByStatus('disabled') } />
      </Content>
    </section>;
  };
}

export default connect((state) => {
  return {
    jobs: state.jenkins.jobs,
  }
})(Dashboard);
