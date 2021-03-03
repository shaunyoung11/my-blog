import React, { Component } from 'react';

class Post extends Component {
  state = {};
  render() {
    return <h1>Post {this.props.match.params.cid}</h1>;
  }
}

export default Post;
