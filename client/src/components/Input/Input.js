import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Input.css';

class Input extends React.PureComponent {
  // Return the input props
  get inputProps() {
    return {
      type: this.props.type || 'text',
      placeholder: this.props.placeholder,
      className: `Input ${this.props.className}`,
      id: this.props.id,
      name: this.props.id
    };
  }

  // OnChange callback
  onChange(e) {
    this.props.onChange(e.target.value);
  }

  // Render the label if it's available
  renderLabel() {
    if (this.props.label === undefined) {
      return '';
    } else {
      return <label for={ this.props.id }>
        { this.props.label }
      </label>;
    }
  }

  render() {
    return <div className="Input">
      { this.renderLabel() }
      <input { ...this.inputProps } onChange={ this.onChange.bind(this) } />
    </div>
  }
}

Input.PropTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  placheholder: PropTypes.string,
  className: PropTypes.string
}

export default Input;
