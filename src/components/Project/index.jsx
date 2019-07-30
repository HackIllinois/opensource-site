import React from 'react';
import './style.scss';

class Project extends React.Component {
  render() {
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <div className="project">
          <img src={this.props.image} alt={this.props.name} />
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
        </div>
      </a>
    );
  }
}

export default Project;
