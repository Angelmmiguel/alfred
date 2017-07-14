import React from 'react';

// Styles
import './Title.css';

class Title extends React.PureComponent {
  render() {
    return <h1 className="Title">
      { this.props.children }
    </h1>
  }
}

export default Title;
