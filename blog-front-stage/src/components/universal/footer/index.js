import React, { Component } from 'react';

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="blog-info">
          <div className="blog-name">小扬Shaun</div>
          <div className="blog-intro"></div>
          <a href="https://beian.miit.gov.cn/" className="icp"></a>
        </div>
        <div className="contact"></div>
      </div>
    );
  }
}

export default Footer;
