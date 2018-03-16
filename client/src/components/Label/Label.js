import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Label.css';

class Label extends React.PureComponent {
  render() {
    return <label htmlFor={ this.props.id } className="Label">
      { this.props.children }
    </label>
  }
}

Label.PropTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string
  ]).isRequired
}

export default Label;
