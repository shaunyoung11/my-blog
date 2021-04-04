import React, { Component } from 'react';
import store from '../../../store';
import './style.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <div className="footer">
        <div className="blog-info">
          <div className="blog-name">
            {this.state.siteInfo[1] && this.state.siteInfo[1].value}
          </div>
          <div className="blog-intro">
            {this.state.siteInfo[3] && this.state.siteInfo[3].value}
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://beian.miit.gov.cn/"
            className="icp"
          >
            {this.state.siteInfo[4] && this.state.siteInfo[4].value}
          </a>
        </div>
        <div className="contact">
          <div className="mail contact-item">
            <a href={'mailto:' + this.state.siteInfo.mail}>
              {this.state.siteInfo[6] && this.state.siteInfo[6].name}
            </a>
          </div>
          <div className="github contact-item">
            <a
              target="_blank"
              rel="noreferrer"
              href={this.state.siteInfo[5] && this.state.siteInfo[5].value}
            >
              {this.state.siteInfo[5] && this.state.siteInfo[5].name}
            </a>
          </div>
          {this.state.siteInfo.otherContact &&
            this.state.siteInfo.otherContact.map((item, index) => {
              return (
                <div className="contact-item" key={item + index}>
                  <a href={item.href}>{item.name}</a>
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  storeChange() {
    this.setState(store.getState());
  }
}

export default Footer;
