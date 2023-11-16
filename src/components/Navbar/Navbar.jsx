// Navbar.js
import React from 'react';
import './navbar.css';
import { useState } from 'react'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
    <a href='#home' onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active' : ''}>Home</a>
    <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active' : ''} >About</a>
    <a href='#solution' onClick={()=>setActiveNav('#solution')} className={activeNav==='#solution'? 'active' : ''}>Solution</a>
    <a href='#blog' onClick={()=>setActiveNav('#blog')} className={activeNav==='#blog'? 'active' : ''}>Blog</a>
    <a href='#crm' onClick={()=>setActiveNav('#crm')} className={activeNav==='#crm'? 'active' : ''}>Forecast</a>
</nav>
  );
};

export default Navbar;
