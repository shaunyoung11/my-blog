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
    let group =
      this.props.match.params.group === undefined
        ? 'all'
        : this.props.match.params.group;
    const action = getArticle(group);
    store.dispatch(action);
  }

  render() {
    return (
      <div>
        <Hel title={this.state.title} defaultTitle={this.state.title} />
        Archive
      </div>
    );
  }
}

export default Archive;
