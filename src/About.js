import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
// import MobileLayout from './MobileLayout';

const About = () => {
  return (
    <div style={{ justifySelf: "center" }}>
      <div className="large-main-div" id="about-main-wrapper">
        <div className="home-link-div">
          <Link to="/">
            <img
              style={{ width: "30px", height: "30px" }}
              src={process.env.PUBLIC_URL + "/home.png"}
            />
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="page-title">
            <h1>About</h1>
          </div>
          <div className="about-main">
            {/* <div className='pic-border'> */}
            <div className="about-buttons">
            {/* <div className='pic-border'> */}
            <img id='about-pic' src={process.env.PUBLIC_URL + '/me.jpg'} alt="me"/>
          {/* </div> */}
              <div className="btns-container">
                <button
                  className="btns-about"
                  id="about-button-one"
                  onClick={() => {
                    window.location.href =
                      "https://docs.google.com/document/d/1C3DjXe4tBDgbOJq6a1ecBt7QMyfU1J4uMTqfo_tUkM4/edit?usp=sharing";
                  }}
                >
                  Resume
                </button>
                <button
                  className="btns-about"
                  onClick={() => {
                    window.location.href = "https://github.com/JTConnolly82";
                  }}
                >
                  Github
                </button>
              </div>
              <div className="social-icons-about">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/HIIMJ0HN"
                >
                  <img
                    className="icon-about"
                    src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/twitter-512.png"
                    alt="twitter"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/jtc/"
                >
                  <img
                    className="icon-about"
                    src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/linkedin-512.png"
                    alt="linkedin"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/JTConnolly82"
                >
                  <img
                    className="icon-about"
                    src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
                    alt="github"
                  />
                </a>
              </div>
            </div>
            {/* <img id='about-pic' src={process.env.PUBLIC_URL + '/me.jpg'} alt="me"/> */}
            {/* </div> */}
            <div className="about-desc-wrap">
              {/* <h2 style={{ fontSize: "40px" }}>Hi I'm John,</h2> */}
              <h1 className='about-text'>
                Currently living in Salt Lake City, Utah 🏡. Experienced in software
                development 👨‍💻 and project management.  Avid skier ⛷ and biker. 
              </h1>
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
  );
};

export default About;
