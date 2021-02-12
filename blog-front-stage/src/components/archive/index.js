import React, { Component } from 'react';
import store from '../../store';
import { getArticle } from '../../store/actionCreators';
import Hel from '../universal/helmet';

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    const action = getArticle(this.state.group);
    store.dispatch(action);
  }

  render() {
    return (
      <div>
        <Hel title={this.state.title} defaultTitle={this.state.defaultTitle} />
        {}
      </div>
    );
  }
}

export default Archive;
