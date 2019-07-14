import React from 'react';
import './style.scss';

class Quote extends React.Component {
  render() {
    return (
      <div>
        <div className="quote">
          <p>{this.props.quote}</p>
        </div>
        <div className="mentor">
          <img src={this.props.image} alt={this.props.name} />
          <p>— {this.props.name}, {this.props.project}</p>
        </div>
      </div>
    );
  }
}

export default Quote;
