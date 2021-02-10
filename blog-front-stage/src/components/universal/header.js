import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppRouter from '../../router';

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
        <Link to="/archive">归档</Link>
      </li>
    </ul>
  );
}

export default Header;
