import React from 'react';

// Components
import CategoryIcon from '../CategoryIcon';

// Utils
import statusByColor from '../../shared/status';

// Styles
import './JobCard.css';

class JobCard extends React.PureComponent {

  render() {
    let status = statusByColor(this.props.color);
    // CSS classes
    let cssClass = `JobCard ${this.props.className}`;
    let statusClass = `JobCard__Status JobCard__Status-${status.status}`;

    if (status.inProgress) {
      statusClass = `${statusClass} JobCard__Status-progress`;
    }

    return <article className={ cssClass }>
      <div className="JobCard__Content">
        <CategoryIcon category={ this.props.category } />
        { this.props.name }
      </div>
      <div className={ statusClass }>
      </div>
    </article>;
  }
}

export default JobCard;
