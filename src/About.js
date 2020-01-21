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
                - I'm a developer from Pittsburgh living in Salt Lake City.  I have experience
                writing code on the frontend and backend in JavaScript and Ruby. I also
                enjoy designing UI's and sharpening my CSS skills.
              </h3>
              <h3>
                - Interested in getting in touch? Want to learn more about me?  Please check out
                my resume and github below, or send me a message from my contact page.
              </h3>
              <div className='about-buttons'>
                <button className='btns-about' onClick={()=>{window.location.href='https://drive.google.com/file/d/165XH6jrcKGgBNTNNT6St3Nn6JZ_Lq0GE/view?ths=true'}}>Resume</button>
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

