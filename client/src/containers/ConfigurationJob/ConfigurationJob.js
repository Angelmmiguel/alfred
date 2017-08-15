import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import { ArrowLeft } from 'react-feather';
import { Link } from 'react-router5';
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Content from '../../components/Content';

// Styles
import './ConfigurationJob.css';

// Utils
import fetch from '../../shared/fetch';

class ConfigurationJob extends React.Component {

  constructor(props) {
    super(props);
  }

  get jobId() {
    return this.props.route.params.job;
  }

  componentDidMount() {

  }

  render() {
    return <section className="ConfigurationJob">
      <Navigation />
      <Content>
        <Title>
          <Link routeName='configuration'>
            <ArrowLeft />
          </Link>
          { ' ' }
          Edit { this.jobId }
        </Title>
        <Input id='name' onChange={ (val) => console.log(val) } label="Name" />
      </Content>
    </section>;
  };
}

export default connect((state) => {
  return {
    route: state.router.route,
    jobs: state.jenkins.jobs,
  }
})(ConfigurationJob);
