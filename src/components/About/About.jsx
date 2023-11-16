import React from 'react'
import './about.css'
import IMG from '../../img/11.jpg'
const About = () => {
    return (
      <section id="about">
        <h2>About Resilix</h2>
        <div className="container about__container">
          <div className="about__me">
            <p>
            As a team of passionate engineering students from Cameroon, we've united to create a cutting-edge solution for the unique challenges faced by the beautiful cities of Buea and Limbe. we believe in leveraging the power of technology to safeguard communities. Our platform integrates real-time data, predictive analytics, and community engagement to redefine disaster preparedness. With a commitment to smart safety and swift response, we aim to empower residents and authorities alike, ensuring a safer, more resilient tomorrow.
            </p>
          </div>
          <div className="about__me__content">
            <div className="crm__me__image">
              <img src={IMG} alt=""></img>
            </div>
           
          </div>
        </div>
      </section>
    );
}

export default About