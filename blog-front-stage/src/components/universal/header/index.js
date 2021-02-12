import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
    };
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
  }
  render() {
    return (
      <div className="header">
        <a href={this.props.siteUrl} className="site-name">
          {this.props.siteName}
        </a>
        <img src={this.props.logoUrl} alt="" className="site-logo"></img>
        <div className="nav-burger" onClick={this.handleBurgerClick}>
          <div
            className={
              this.state.showNav ? 'nav-burger-item show' : 'nav-burger-item'
            }
          ></div>
          <div
            className={
              this.state.showNav ? 'nav-burger-item show' : 'nav-burger-item'
            }
          ></div>
          <div
            className={
              this.state.showNav ? 'nav-burger-item show' : 'nav-burger-item'
            }
          ></div>
        </div>
        <div className={this.state.showNav ? 'nav' : 'nav hide'}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={this.handleBurgerClick}
          >
            <Menu.Item className="nav-item" key="1">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item className="nav-item" key="2">
              <Link to="/links">友链</Link>
            </Menu.Item>
            <Menu.Item className="nav-item" key="3">
              <Link to="/about">关于</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }

  handleBurgerClick() {
    this.setState({
      showNav: !this.state.showNav,
    });
  }
}

export default Header;
