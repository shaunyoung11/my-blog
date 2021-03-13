import React, { Component } from 'react';
import store from '../../store';
import { getAbout } from '../../store/actionCreators';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <div
        className="content-main"
        dangerouslySetInnerHTML={{ __html: this.state.about.content }}
      ></div>
    );
  }
  componentDidMount() {
    const action = getAbout();
    store.dispatch(action);
  }
  storeChange() {
    this.setState(store.getState());
  }
}

export default About;
