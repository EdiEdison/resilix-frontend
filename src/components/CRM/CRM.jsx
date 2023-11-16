import React from 'react';
import './crm.css';
import moi from '../../img/background.jpg';
// import { FaAward } from 'react-icons/fa';
// import { FiUsers } from 'react-icons/fi';
// import { VscFolderLibrary } from 'react-icons/vsc';

const CRM = () => {
  return (
    <section id="crm">
      <div className="container crm__container">
      <div crm__me>
        <div className="crm__me__image">
          <img src={moi} alt="Resilix" />
        </div>
        </div>
        <div className="crm__me__content">
          
          <h2>Resilix A Smarter Approach to Safety</h2>
          <p>
          Our intelligent platform integrates real-time data and predictive analytics, ensuring swift responses and community-wide safety in the face of emergencies.
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default CRM;
