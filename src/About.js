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
        <div className='pic-border'>
            <img id='about-pic' src="https://i.imgur.com/Y83S3eV.jpg" alt="me"/>
          </div>
            <div className='about-desc-wrap'>
              <h2 style={{fontSize: '38px', marginBottom: '5px'}}>
                Hi I'm John,
              </h2>
              <h3>
                I'm a developer with experience in frontend and backend.  I 
                also enjoy designing UI's and growing my css skills.
                Some of my favorite frameworks and tools 
                are React, Node with Express JS, and Ruby on Rails.
                
              </h3>
              <h3>
                Prior to software development I worked at SolarCity and Tesla
                where I was involved with solar and energy storage projects.
              </h3>
              <div className='about-buttons'>
                <button className='btns-about' onClick={()=>{window.location.href='https://w3docs.com'}}>Resume</button>
                <button className='btns-about' onClick={()=>{window.location.href='https://github.com/JTConnolly82'}}>Github</button>
              </div>
            </div>
        </div>
      </div>
      {/* <div className='about-buttons'>
        <button className='btns-about' onClick={()=>{window.location.href='https://w3docs.com'}}>Resume</button>
        <button className='btns-about' onClick={()=>{window.location.href='https://w3docs.com'}}>Github</button>
      </div> */}
    </div>
    {/* } */}
      
    </div>
  )
}


export default About;

