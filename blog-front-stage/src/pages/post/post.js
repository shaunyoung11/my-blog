import React, { Component } from 'react';
import store from '../../store';
import { getPost } from '../../store/actionCreators';
import './post.css';

class Post extends Component {
  /**
   * 构造函数
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }

  render() {
    return (
      <div className="post">
        <div className="cover"></div>
        <div className="info"></div>
        <div className="content"></div>
      </div>
    );
  }

  componentDidMount() {
    const action = getPost(this.props.match.params.cid);
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState());
  }
}

export default Post;
