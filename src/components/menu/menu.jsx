import React, { useState } from 'react'
import "./style.css";
function Menu() {
  const [Menu , setmenu] = useState('home')
  return (
    <section>
        <div className="header">
        <div className="logo">
          <img src="image/logo.png" alt="logo.png" />
        </div>
        <div className="menu">
          <ul>
            <li onClick={() =>{setmenu('home')}} className={Menu==="home" ? "active":""}>Home</li>
            <li onClick={() =>{setmenu('menu')}} className={Menu==="menu" ? "active":""}>menu</li>
            <li onClick={() =>{setmenu('about')}} className={Menu==="about" ? "active":""}>about</li>
            <li onClick={() =>{setmenu('contact')}} className={Menu==="contact" ? "active":""}>contact</li>
          </ul>
        </div>
        <div className="search">
          <input type="search" name="search"/>
          <img src="/image/download1.png" alt="/image/download1.png"/>
          <div className='circle'>{3}</div>
          <button>sign in</button>
        </div>
        </div>
      </section>
  )
}

export default Menu