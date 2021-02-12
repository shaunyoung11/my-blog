import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header(props) {
  return (
    <div className="header">
      <div className="site-info">
        <img src={props.logoUrl} alt="" className="site-logo"></img>
        <span className="site-name">{props.siteName}</span>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">首页</Link>
        </li>
        <li className="nav-item">
          <Link to="/links">友链</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">关于</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
