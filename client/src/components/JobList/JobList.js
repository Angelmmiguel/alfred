import React from 'react';

// Components
import JobCard from '../JobCard';

// Styles
import './JobList.css';

class JobList extends React.PureComponent {

  render() {
    let lastElement = '';

    // Add an extra element to avoid separed jobs in the view
    if (this.props.jobs.length % 3 === 2) {
      lastElement = <article className="JobList__Job"></article>;
    }

    return <div className="JobList">
      { this.props.jobs.map((el) => {
        return <JobCard jenkinsUrl={this.props.jenkinsUrl}
                        key={el.name}
                        className="JobList__Job"
                        { ...el }/>;
      })}
      { lastElement }
    </div>;
  }
}

export default JobList;
