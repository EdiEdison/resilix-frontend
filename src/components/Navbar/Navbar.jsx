// Navbar.js
import React from 'react';
import './navbar.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    // <nav>
    //   <Link to="/">Home</Link>
    //   <Link to="/about">About</Link>
    //   <Link to="/solution">Solution</Link>
    //   <Link to="/blog">Blog</Link>
    //   <Link to="/forecast">Forecast</Link>
    // </nav>
    <nav>
    <a href='#home' onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active' : ''}><AiOutlineHome/>Home</a>
    <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active' : ''} ><AiOutlineUser/>About</a>
    <a href='#solution' onClick={()=>setActiveNav('#solution')} className={activeNav==='#solution'? 'active' : ''}><BiBook/>Solution</a>
    <a href='#blog' onClick={()=>setActiveNav('#blog')} className={activeNav==='#blog'? 'active' : ''}><RiServiceLine/>Blog</a>
    <a href='#crm' onClick={()=>setActiveNav('#crm')} className={activeNav==='#crm'? 'active' : ''}><BiMessageSquareDetail/>Forecast</a>
</nav>
  );
};

export default Navbar;
