import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Hel extends Component {
  render() {
    return (
      <Helmet titleTemplate={this.props.defaultTitle + ' | %s'}>
        <title>{this.props.title}</title>
      </Helmet>
    );
  }
}

export default Hel;
