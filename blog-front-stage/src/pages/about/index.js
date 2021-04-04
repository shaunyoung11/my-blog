import { Avatar } from 'antd';
import React, { Component } from 'react';
import store from '../../store';
import { getAbout } from '../../store/actionCreators';
import './style.scss';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <div className="about">
        <Avatar
          className="avatar"
          src="https://shaun-logo.oss-cn-beijing.aliyuncs.com/my_info.png"
          size={125}
        ></Avatar>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: this.state.about && this.state.about.contentHTML,
          }}
        ></div>
      </div>
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
