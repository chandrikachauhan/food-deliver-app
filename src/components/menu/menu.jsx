import React from 'react'
import "./style.css";
function Menu() {
  return (
    <section className="header">
        <div className="logo">
          <img src="image/logo.png" alt="logo.png" />
        </div>
        <div className="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">gallary</a></li>
            <li><a href="#">contacts</a></li>
          </ul>
        </div>
        <div className="search">
          <input type="search" name="search"/>
        </div>
      </section>
  )
}

export default Menu