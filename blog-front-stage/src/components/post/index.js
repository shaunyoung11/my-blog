import React, { Component } from 'react';
import './style.css';

class Post extends Component {
  state = {};
  render() {
    return (
      <div className="post">
        <h1>Post {this.props.match.params.cid}</h1>
      </div>
    );
  }
}

export default Post;
