import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa'
import { CgTwitter } from "react-icons/cg";

import './footer.css'
const Footer = () => {
    return (
      <div className="footer__container">
        <a href="#me" className="footer__logo">
          Resilix
        </a>

        <div className='copyRight'>
        <h3>BUEA</h3>
        <h3>LIMBE</h3>
        </div>

        <div className="footer__media">
          <a href="https://linkedin.com/" target="blank">
            <BsLinkedin />
          </a>
          <a href="https://www.facebook.com/" target="blank">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/" target="blank">
            <CgTwitter />
          </a>
        </div>

        <div className="copyRight">
            <h3>SMCON23</h3>
        </div>
        <div className="copyRight">
            <h3>@copyright Resilix 2023</h3>
        </div>
      </div>
    );
}

export default Footer