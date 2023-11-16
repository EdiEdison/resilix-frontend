import React from 'react';
import './home.css';
import moi from '../../img/5.jpg';
// import { FaAward } from 'react-icons/fa';
// import { FiUsers } from 'react-icons/fi';
// import { VscFolderLibrary } from 'react-icons/vsc';

const Home = () => {
  return (
    <section id="home">
      <div className="container home__container">
        <div className="home__me__content">
          
      <h2>Resilix A Smarter Approach to Safety</h2>
          <p>
          Our intelligent platform integrates real-time data and predictive analytics, ensuring swift responses and community-wide safety in the face of emergencies.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's get started
          </a>
        </div>
        <div home__me>
        <div className="home__me__image">
          <img src={moi} alt="Resilix" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
