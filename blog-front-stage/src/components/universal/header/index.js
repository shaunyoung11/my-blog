import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import store from '../../../store';
import 'antd/dist/antd.css';
import './style.css';
import { getHeader } from '../../../store/actionCreators';

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
        <a
          href={this.state.siteInfo[2] && this.state.siteInfo[2].value}
          className="site-name"
        >
          {this.state.siteInfo[1] && this.state.siteInfo[1].value}
        </a>
        <img
          src={this.state.siteInfo[0] && this.state.siteInfo[0].value}
          alt={this.state.siteInfo[1] && this.state.siteInfo[1].value}
          className="site-logo"
        ></img>
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

  storeChange() {
    this.setState(store.getState());
  }
}

export default Header;
