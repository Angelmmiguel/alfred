import React from 'react';

// Components
import { Link } from 'react-router5';
import { Layers, Settings } from 'react-feather';
import Content from '../Content';

// Styles
import './Navigation.css';

class Navigation extends React.PureComponent {

  render() {
    return <header className="Navigation">
      <Content>
        <div className="Navigation__Bar">
          <div className="Navigation__Logo">
            <Link routeName='index'><Layers /> Alfred </Link>
            for <a href={ this.props.jenkinsUrl }>
              { this.props.jenkinsUrl }
            </a>
          </div>
          <div className="Navigation__Filters">

          </div>
          <nav className="Navigation__Nav">
            <Link routeName='configuration'>
              <Settings />
            </Link>
          </nav>
        </div>
      </Content>
    </header>
  }
}

export default Navigation;
