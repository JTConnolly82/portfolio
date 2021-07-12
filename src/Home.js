import React from 'react';
import {Link} from 'react-router-dom';
import ParticleComponent from './ParticleComponent';
import './styles.css';

import './styles.css';


const Home = () => {
  
  return (

    <div className='home-container'>
      <div className='large-main-div-home'>
        <div id='home-main'>
          <div className='top-home'>
            <div style={{borderRadius: '10px', padding: '20px'}}>
              <h1>John Connolly</h1>
              <div className='large-home-statement'>
                <h3>Developer based in Salt Lake City, Utah</h3>
              </div>
            </div>
          </div>
          <div className='home-card'>
            <ParticleComponent />
            <div className='home-buttons'>
              <button className='the-buttons-home' id='project-button'><Link to='/projects'>Projects</Link></button>
              <button className='the-buttons-home' id='about-button-home'><Link to='/about'>About</Link></button>
              <button className='the-buttons-home' id='contact-button'><Link to='/contact'>Contact</Link></button>
            </div>
          </div>
        </div>
      </div>
  </div> 
    
  )
}

export default Home;
 