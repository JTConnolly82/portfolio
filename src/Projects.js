

import React, {useState, useEffect} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
// import ProjectCard from './ProjectCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




class Projects extends React.Component {



  render() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let bg = process.env.PUBLIC_URL + '/ascenda.png';

  return (
    <div className='home-container' id='projects-outer-wrap'>
      <div className='large-main-div' id='projects-main-div'>
        <div className='home-link-div'>
        <Link to='/'><img style={{width: '30px', height: '30px'}} src={process.env.PUBLIC_URL + '/home.png'} /></Link>
        </div>
        <div className='page-title'>
          <h1>Projects</h1>
        </div>
        <div id='projects-main' >
        <Slider className='slider' {...settings}>
        <a target='_blank' rel="noreferrer" >
            <div style={{
              backgroundImage: "url("+bg+")",
              height: '58vh',
              backgroundPosition: '10% 10%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
            </div>
            <div className='project-background-div'>
              <div className='project-description'>
                <div className='project-title-div'>
                <h1>
                  Ascenda
                </h1>
                <span className='project-buttons'>
                  <button className='link-to-proj'><a href="">Coming Soon</a></button>
                  {/* <button className='link-to-git'><a href="https://github.com/JTConnolly82/apt-reviews">Github</a></button> */}
                </span>
                </div>
                <h4>
                  -  Building MVP for Ascenda's online education and mentorship programs.
                </h4>
                <h4>
                  -  Built with React, Firebase.
                </h4>
              </div>
              </div>
              </a>
            <a target='_blank' rel="noreferrer" href="https://apt-reviews-vs.herokuapp.com/">
            <div style={{
              backgroundImage: "url('https://i.imgur.com/STkDPKP.png')",
              height: '58vh',
              backgroundPosition: '10% 10%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
            </div>
            <div className='project-background-div'>
              <div className='project-description'>
                <div className='project-title-div'>
                <h1>
                  Apartment Reviews
                </h1>
                <span className='project-buttons'>
                  <button className='link-to-proj'><a href="https://apt-reviews-vs.herokuapp.com/">View Project</a></button>
                  <button className='link-to-git'><a href="https://github.com/JTConnolly82/apt-reviews">Github</a></button>
                </span>
                </div>
                <h4>
                  - Users can sign in and leave reviews for individual apartment units.
                </h4>
                <h4>
                  - Built with React, Express, Mongoose, MongoDB.
                </h4>
              </div>
              </div>
              </a>
            <a target='_blank' rel="noreferrer" href="https://spacextracker.netlify.com/">
            <div style={{
                backgroundImage: "url('https://i.imgur.com/xPAwOcn.png')",
                height: '54vh',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}>
            </div>
              <div className='project-background-div'>
                <div className='project-description'>
                <div className='project-title-div'>
                <h1>
                  SpaceX Launch Tracker
                </h1>
                <span className='project-buttons'>
                  <button className='link-to-proj'><a href="https://spacextracker.netlify.com">View Project</a></button>
                  <button className='link-to-git'><a href="https://github.com/JTConnolly82/spaceX-api-project">Github</a></button>
                </span>
                </div>
                  <h4>
                    - Search through SpaceX launch history and view stats on the roadster satellite.
                  </h4>
                  <h4>
                    - Built with React
                  </h4>
                </div>
              </div>
            </a>
        </Slider>
        </div>
    </div>
  </div>
  )
 }
}


export default Projects;