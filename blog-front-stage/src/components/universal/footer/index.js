import React, { Component } from 'react';
import store from '../../../store';
import Sintro from '../../sintro';
import './style.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    this.unsubscribe = store.subscribe(this.storeChange);
  }
  render() {
    return (
      <div className="footer">
        <div className="me">
          <Sintro
            className="intro"
            avatar={this.state.siteLogo}
            name={this.state.siteName}
            intro={this.state.siteIntro}
            github={this.state.siteGithub}
            mail={this.state.siteMail}
          />
        </div>
        <div className="right">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://beian.miit.gov.cn/"
            className="icp"
          >
            {this.state.siteICP}
          </a>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  storeChange() {
    this.setState(store.getState());
  }
}

export default Footer;
