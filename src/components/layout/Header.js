import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/react-todolist/">Home</Link> | <Link style={linkStyle} to="/react-todolist/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#809c8e',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
