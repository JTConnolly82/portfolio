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
                - Interested in getting in touch?  View
                my resume and github below, or send me a message from my contact page.
              </h3>
              <div className='about-buttons'>
                <button className='btns-about' onClick={()=>{window.location.href='https://drive.google.com/file/d/1YXfhMzAZzBmm9a2OSQesqNMiM35aJvlH/view?usp=sharing'}}>Resume</button>
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

