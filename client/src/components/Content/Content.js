import React from 'react';

// Styles
import './Content.css';

class Content extends React.PureComponent {
  render() {
    return <main className="Content">
      { this.props.children }
    </main>
  }
}

export default Content;
