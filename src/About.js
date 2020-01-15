import React, {useState, useEffect} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import MobileLayout from './MobileLayout';



const About = () => {

  return (
    <div style={{justifySelf: 'center'}}>
    <div className='large-main-div' id='about-main-wrapper'>
      <div className='home-link-div'>
        <Link to='/'><img src="https://img.icons8.com/small/31/000000/home.png" /></Link>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <div className='page-title'>
          <h1>About</h1>
      </div>
        <div className='about-main'>
            <div className='about-desc-wrap'>
                <h2 style={{marginBottom: '25px', fontSize: '38px'}}>
                  Hi I'm John
                </h2>
                <h3>
                  I'm a developer living in Salt Lake City Utah.   
                </h3>
                <h3>
                  This is essentially filler text until I can think of 
                  something worth putting down on my website.
                </h3>
                <h3>
                  Outside of work and side projects I enjoy getting out in Salt Lake's nearby mountains.
                  This is essentially filler text until I can think of 
                  something worth putting down on my website.
                </h3>
                <h3>
                This is essentially filler text until I can think of 
                  something worth putting down on my website.
                  A copy of my resume can be found here.
                </h3>
            </div>
          <div className='pic-border'>
            <img id='about-pic' src="https://i.imgur.com/Y83S3eV.jpg" alt="me"/>
          </div>
        </div>
      </div>
      <div className='about-buttons'>
            <button className='the-buttons-home'>Resume</button>
            <a href="https://github.com/JTConnolly82"><button className='the-buttons-home'>Github</button></a>
      </div>
    </div>
    {/* } */}
      
    </div>
  )
}


export default About;

