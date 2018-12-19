import React, { Component } from 'react';

class Author extends Component {
  render() {
    return (
      <div className="author">
        <p>Written by { this.props.name }</p>
      </div>
    );
  }
}

export default Author;
