import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import { ArrowLeft } from 'react-feather';
import { Link } from 'react-router5';
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Content from '../../components/Content';
import Slider from 'rc-slider';

// Styles
import 'rc-slider/assets/index.css';
import './ConfigurationJob.css';

// Utils
import fetch from '../../shared/fetch';
import priorityMarks from '../../shared/priorities';
import slaMarks from '../../shared/sla';

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
        <form className="ConfigurationJob__Form" onSubmit={ () => {} }>
          <Input id='name' onChange={ (val) => console.log(val) } label="Name" />
          <div className="ConfigurationJob__Slider">
            <Label id="priority">Priority</Label>
            <div className="ConfigurationJob__Slider__Wrapper">
              <Slider marks={ priorityMarks } defaultValue={ 0 } min={ 0 }
                max={ Object.keys(priorityMarks).length - 1} step={ 1 } included={ false }/>
            </div>
          </div>
          <div className="ConfigurationJob__Slider">
            <Label id="sla">SLA</Label>
            <div className="ConfigurationJob__Slider__Wrapper">
              <Slider marks={ slaMarks } defaultValue={ 3 } min={ 0 }
                max={ Object.keys(slaMarks).length - 1} step={ 1 } included={ false }/>
            </div>
          </div>
        </form>
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
