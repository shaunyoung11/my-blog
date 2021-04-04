import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, Tag } from 'antd';
import { LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import store from '../../../store';
import { getHeader } from '../../../store/actionCreators';
import './style.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    const action = getHeader();
    store.dispatch(action);
    this.state = store.getState();
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <div className="header">
        <div className="info">
          <Avatar
            src={this.state.siteLogo}
            alt={this.state.siteName}
            className="logo"
          />
          <a href={this.state.siteUrl} className="name">
            {this.state.siteName}
          </a>
        </div>
        <div className="nav">
          <Button
            className="item"
            type={
              window.location.href.split('/').pop() === '' ? 'primary' : 'text'
            }
            ghost
            shape="round"
          >
            <Link to="/">首页</Link>
          </Button>
          <Button
            className="item"
            type={
              window.location.href.split('/').pop() === 'links'
                ? 'primary'
                : 'text'
            }
            ghost
            shape="round"
          >
            <Link to="/links">友链</Link>
          </Button>
          <Button
            className="item"
            type={
              window.location.href.split('/').pop() === 'about'
                ? 'primary'
                : 'text'
            }
            ghost
            shape="round"
          >
            <Link to="/about">关于我</Link>
          </Button>
        </div>
        <div className="contact">
          <a className="link" href="https://linkedin.com" target="_blank">
            <Tag icon={<LinkedinOutlined />} color="#55acee">
              LinkedIn
            </Tag>
          </a>
          <a
            className="link"
            href={'mailto:' + this.state.siteMail}
            target="_blank"
          >
            <Tag icon={<MailOutlined />} color="green">
              email
            </Tag>
          </a>
        </div>
      </div>
    );
  }

  handleBurgerClick() {
    this.setState({
      showNav: !this.state.showNav,
    });
  }

  storeChange() {
    this.setState(store.getState());
  }
}

export default Header;
