import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './styles.css'



const Nav = (props) => {

  return (
    
    <div className='nav-container'>
      <div className='inner-nav'>
            <div className='nav-links'>
            <Link className='nav-link-hover-target' to='/projects'>
              <span id='projects-link'>
                <span className='inner-nav-link'>
                  <h3>Projects</h3>
                </span>
              </span>
            </Link>
            <Link className='nav-link-hover-target' to='/about' >
              <span id='about-link'>
                <span className='inner-nav-link'>
                  <h3>About</h3>
                </span>
              </span>
              </Link>
              <Link className='nav-link-hover-target' to='/contact'>
                <span id='contact-link'>
                  <span className='inner-nav-link'>
                    <h3>Contact</h3>
                  </span>
                </span>
              </Link>
            </div> 
          </div>
    </div>
  )
}

export default withRouter(Nav);
