import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';



const Contact = () => {


  return (
    <div style={{justifySelf: 'center'}}>
    <div className='large-main-div' id='contact-outer-wrapper'>
      <div className='large-main-inner' id='contact-main' >
        <div className='home-link-div'>
        <Link to='/'><img style={{width: '30px', height: '30px'}} src={process.env.PUBLIC_URL + '/home.png'} /></Link>
        </div>
        <div className='page-title'>
          <h1>Contact</h1>
        </div>
        <div id='contact-statement'>
        <h3>
          You can reach me by email <a id='mail-link' href="mailto:jtconnolly82@gmail.com">here</a> or use the form below.
        </h3>
      </div> 
        <div className='contact-wrap'>
        <form action="/contact" className='contact-form' name="contact-form" method="post" >
          <input type="hidden" name="form-name" value='contact-form' />
            <p className='input-label'>
              <input type="text" name="name" placeholder='name' required/>   
            </p>
            <p className='input-label'>
              <input type="email" name="email" placeholder='example@email.com' required/>
            </p>
            <p className='input-label'>
              <textarea name="message" placeholder='message' required/>
            </p>
            <p className='input-label'>
              <button type="submit" id='contact-btn'>Send</button>
            </p>
        </form>
        </div>
        <div className='social-icons'>
          {/* <a target='_blank' rel="noreferrer" href="https://twitter.com/HIIMJ0HN"><img className='icon' src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/twitter-512.png" alt="twitter"/></a> */}
          <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/jtc/"><img className='icon' src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/linkedin-512.png" alt="linkedin"/></a>
          <a target='_blank' rel="noreferrer" href="https://github.com/JTConnolly82"><img className='icon' src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" alt="github"/></a>
        </div>
      </div>
    </div>
  </div>
  )
}


export default Contact;