import React from 'react';

// Styles
import './Button.css';

class Button extends React.PureComponent {
  render() {
    return <button className="Button" onClick={this.props.onClick}>
      { this.props.children }
    </button>
  }
}

export default Button;
