import React from 'react';

function Header() {
  return (
    <div className="Header">
      
      <h1 className="Title">Blush</h1>

      
      <ul className="Menu">
        <li><a class="active" href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>

    </div>
  )
}

export default Header
