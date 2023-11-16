import React from 'react'
import './solution.css'

const Solution = () => {
  return (
    <section id="solution">
      <h2>Our solution</h2>

      <div className='container solution__container'>
        <div className='solution'>
          <h3>Predictive Alerts</h3>
          <div className='solution__content'>
            <article className='solution__details'>
              <div>
              <small className='text-light'>Resilix employs advanced data analytics and machine learning to predict disasters, providing real-time alerts to residents and authorities, ensuring proactive and timely responses.</small></div>
            </article>
          </div>
        </div>
        <div className='solution'>
          <h3>Community-Centric</h3>
          <div className='solution__content'>
            <article className='solution__details'>
              <div>
              <small className='text-light'>Our platform fosters community engagement, offering a mobile app and web portal that empower residents with information, emergency resources, and a unified space for collaboration during crises.</small></div>
            </article>
          </div>
        </div>
        <div className='solution'>
          <h3>GIS Dashboard</h3>
          <div className='solution__content'>
            <article className='solution__details'>
              <div>
              <small className='text-light'>Resilix GIS-powered dashboard provides authorities with a comprehensive visual interface, integrating weather, seismic, and sensor data for swift decision-making and resource deployment during emergencies.</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Solution