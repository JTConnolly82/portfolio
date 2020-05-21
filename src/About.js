import React, {useState, useEffect} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
// import MobileLayout from './MobileLayout';



const About = () => {

  return (
    <div style={{justifySelf: 'center'}}>
    <div className='large-main-div' id='about-main-wrapper'>
      <div className='home-link-div'>
        <Link to='/'><img style={{width: '30px', height: '30px'}} src={process.env.PUBLIC_URL + '/home.png'} /></Link>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <div className='page-title'>
          <h1>About</h1>
      </div>
        <div className='about-main'>
        <div className='pic-border'>
            <img id='about-pic' src={process.env.PUBLIC_URL + '/me.jpg'} alt="me"/>
          </div>
            <div className='about-desc-wrap'>
              <h2 style={{fontSize: '40px'}}>
                Hi I'm John,
              </h2>
              <h3>
                - I'm a developer living in Salt Lake City.  I have experience
                writing programs in JavaScript (Node, React) Ruby (Rails), and have
                database experience with MongoDB and Postgres.
                I also enjoy designing UI's and sharpening my CSS skills.
              </h3>
              <h3>
                - Before programming full time I worked for Tesla's energy division on solar and energy storage projects.
              </h3>
              <h3>
                - Interested in learning more?  View
                my resume and github below, or send me a message from my <Link id='about-text-link' to='/contact'>contact page</Link>.
              </h3>
              <div className='about-buttons'>
                <button className='btns-about' onClick={()=>{window.location.href='https://docs.google.com/document/d/1C3DjXe4tBDgbOJq6a1ecBt7QMyfU1J4uMTqfo_tUkM4/edit?usp=sharing'}}>Resume</button>
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

