import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { saveJobs } from '../../actions/jenkins';

// Components
import { CheckCircle } from 'react-feather';
import Navigation from '../../components/Navigation';
import JobCard from '../../components/JobCard';
import Title from '../../components/Title';
import Content from '../../components/Content';

// Styles
import './Dashboard.css';

// Utils
import fetch from '../../shared/fetch';

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

  render() {
    return <section className="Dashboard">
      <Navigation />
      <Content>
        <Title>
          <CheckCircle />
          Correct
        </Title>
        <div className="Dashboard__JobList">
          { this.props.jobs.map((el) => {
            return <JobCard key={el.name} className="Dashboard__Job" { ...el }/>;
          })}
        </div>
      </Content>
    </section>;
  };
}

export default connect((state) => {
  return {
    jobs: state.jenkins.jobs,
  }
})(Dashboard);
