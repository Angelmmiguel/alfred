import React from 'react';

// Components
import CategoryIcon from '../CategoryIcon';

// Styles
import './JobCard.css';

class JobCard extends React.PureComponent {

  render() {
    let cssClass = `JobCard ${this.props.className}`;

    return <article className={ cssClass }>
      <div className="JobCard__Content">
        <CategoryIcon category={ this.props.category } />
        { this.props.name }
      </div>
      <div className="JobCard__Status">
      </div>
    </article>;
  }
}

export default JobCard;
