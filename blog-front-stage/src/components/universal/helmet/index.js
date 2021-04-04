import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import store from '../../../store';

class Hel extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <Helmet titleTemplate={'%s -' + this.state.siteName}>
        <title>{this.props.title || this.state.siteName}</title>
        <link rel="icon" href={this.state.siteLogo}></link>
      </Helmet>
    );
  }
  storeChange() {
    this.setState(store.getState());
  }
}

export default Hel;
