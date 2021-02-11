import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">首页</Link>
      </li>
      <li>
        <Link to="/list/">列表</Link>
      </li>
      <li>
        <Link to="/archive/daily">生活归档</Link>
      </li>
    </ul>
  );
}

export default Header;
