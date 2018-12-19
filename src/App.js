import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Comment from './Comment.js';
import Author from './Author.js';
import About from './About.jsx';

class Post extends Component {

  state = {
    body: 'Initial body'
  }

  updateBody = (body) => {
    this.setState({ body })
  }

  changeBodyFromButton = () => {
    let newBody = prompt('What should the new body be?')
    this.updateBody(newBody)
  }

  // changeBodyFromInput = (event) => {
  //   let newBody = event.target.value
  //   this.updateBody(newBody)
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    this.updateBody(event.target.elements.body_input.value)
  }

  render() {

    let allComments = this.props.post.comments.map((comment, index) =>
      <Comment body={comment} key={index} />
    )

    let allAuthors = this.props.authors.map((name, index) =>
      <Author name={name} key={index} />
    )

    return (
      <div className="post">
        <h1>{this.props.post.title}</h1>

        {allAuthors}

        <p>{this.state.body}</p>

        <button onClick={this.changeBodyFromButton}>Edit body</button>

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="body_input" />
          <input type="submit" value="Submit" />
        </form>

        <h3>Comments</h3>
        {allComments}
        <About></About>
      </div>
    );
  }
}

export default Post;
