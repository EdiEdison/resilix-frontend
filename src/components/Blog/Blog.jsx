import React, { useState, useEffect } from "react";
//import axios from "axios";
import './blog.css'
import IMG2 from '../../img/6.jpg'
import IMG3 from '../../img/7.jpg'
import IMG4 from '../../img/8.jpg'
const Blog = () => {
  return (
    <section id= "blog">
      <h2>Our latest articles</h2>

      <div className='container blog__container'>
        <article className='blog__item'>
          <div className='blog__item-image'>
            <img src={IMG4} alt='blog'/>
          </div>
          <h3>Resilix employs advanced data analytics and machine learning to predict disasters, providing real-time alerts to residents and authorities, ensuring proactive and timely responses.</h3>
        </article>

        <article className='blog__item'>
          <div className='blog__item-image'>
            <img src={IMG2} alt='blog'/>
          </div>
          <h3>Resilix employs advanced data analytics and machine learning to predict disasters, providing real-time alerts to residents and authorities, ensuring proactive and timely responses.</h3>
        </article>

        <article className='blog__item'>
          <div className='blog__item-image'>
            <img src={IMG3} alt='blog'/>
          </div>
          <h3>Resilix employs advanced data analytics and machine learning to predict disasters, providing real-time alerts to residents and authorities, ensuring proactive and timely responses.</h3>
        </article>

        <article className='blog__item'>
          <div className='blog__item-image'>
            <img src={IMG4} alt='blog'/>
          </div>
          <h3>Resilix employs advanced data analytics and machine learning to predict disasters, providing real-time alerts to residents and authorities, ensuring proactive and timely responses.</h3>
        </article>
      </div>
    </section>
  )
}


export default Blog