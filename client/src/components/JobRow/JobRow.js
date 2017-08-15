import React from 'react';

// Components
import { Edit3 } from 'react-feather';
import CategoryIcon from '../CategoryIcon';
import Button from '../Button';

// Styles
import './JobRow.css';

class JobRow extends React.PureComponent {
  render() {
    let cssClass = `JobRow ${this.props.className}`;

    return <tr className={ cssClass }>
      <td>
        { this.props.name }
      </td>
      <td>
        <CategoryIcon category={ this.props.category } />
        { this.props.category }
      </td>
      <td>{ this.props.priority }</td>
      <td>{ this.props.sla }</td>
      <td>
        <Button onClick={ (e) => this.props.onEditClick(this.props.name) }>
          <Edit3 />
          Edit
        </Button>
      </td>
    </tr>;
  }
}

export default JobRow;
