//import React from 'react'
import './index.css'
import Notification from './components/Notification/Notification'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import CRM from './components/CRM/CRM'
import Solution from './components/Solution/Solution'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App(){
  return(
    <div> 
    <Notification />
    <Navbar />
    <Home />
    <About />
    <Solution />
    <CRM />
    <Blog />
    <Contact />
    <Footer /></div>
  );
}

export default App; 
