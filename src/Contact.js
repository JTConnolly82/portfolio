import React, {useState, useEffect} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
// import MobileLayout from './MobileLayout';



const Contact = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(()=> {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
  })

  return (
    <div style={{justifySelf: 'center'}}>
    {/* {width < 438 ?  
      <MobileLayout />
    : */}
     {/* if window is bigger than 438 px render this homepage
     use diff styling etc  */}
    <div className='large-main-div' id='contact-outer-wrapper'>
      <div className='large-main-inner' id='contact-main' >
        <div className='home-link-div'>
          <Link to='/'><img src="https://img.icons8.com/small/31/000000/home.png" /></Link>
        </div>

        <div className='page-title'>
          <h1>Contact</h1>
        </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h3>
          You can reach me at JTConnolly82@gmail.com or use the form below.
        </h3>
      </div>
        <div className='contact-wrap'>
        <form className='contact-form' name="contact" action="/" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />  

          <input type="hidden" name="form-name" value="contact" />
            <p className='input-label'>
              <input type="text" name="name" id='name' placeholder='name' />   
            </p>
            <p className='input-label'>
              <input type="email" name="email" id='email' placeholder='example@email.com'/>
            </p>
            <p className='input-label'>
              <textarea type="text" name="message" id='message' style={{width: 'inherit'}} placeholder='message' />
            </p>
            <p className='input-label'>
              <button name='submit' type="submit" id='contact-btn'>Send</button>
            </p>
        </form>
        </div>
        <div className='social-icons'>
          <h3><img style={{width: '40px', height: '40px'}} src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/twitter-512.png" alt="twitter"/></h3>
          <h3><img style={{width: '40px', height: '40px'}} src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/linkedin-512.png" alt="linkedin"/></h3>
          <h3><img style={{width: '40px', height: '40px'}} src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" alt="github"/></h3>
        </div>
      </div>
    </div>
    {/* } */}

    </div>
  )
}


export default Contact;