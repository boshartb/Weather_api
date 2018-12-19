import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <p>{ this.props.body }</p>
      </div>
    );
  }
}

export default Comment;
