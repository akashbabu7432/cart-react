import {faYoutube,faTwitter, faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div style={{height:'350px'}} className='bg-secondary d-flex justify-content-center align-items-center flex-column text-light'></div>
      <div  className='d-flex mx-3  justify-content-between'>
        <div style={{width:'300px'}} className='intro' >
          <h3><FontAwesomeIcon icon={faTruck}/> Daliya cart</h3>
          <p>Designed and built with all the love in the world by the Luminar team with
            the help of our contributors.Code licensed Luminar, docs CC BY 3.0.Currently v5.3.2</p>
            <p>Code licensed,docs CC by 3.0</p>
            <p>Made with ❤️ by <a href='https://www.luminar.in' className='text-decoration-none'>Luminar</a></p>
          
        </div>
        <div className="link d-flex  flex-column ">
          <h3>Links</h3>
          <Link to={'/'} className='text-decoration-none'>Home</Link>
          <Link to={'/Wishlist'} className='text-decoration-none'>Wishlist</Link>
          <Link to={'/Cart'} className='text-decoration-none'>Cart</Link>
        </div>
        <div className="link d-flex  flex-column ">
          <h3>Guides</h3>
          <a href={'/'} className='text-decoration-none'>React</a>
          <a href={'/Wishlist'} className='text-decoration-none'>React Bootstrap</a>
          <a href={'/Cart'} className='text-decoration-none'>React Redux</a>
          <a href={'/Cart'} className='text-decoration-none'>React Router Dom</a>
        </div>
        <div className="d-flex flex-column">
          <h3>Contact us</h3>
          <div className="d-flex">
            <input type="text" placeholder='Email' className='form-control' />
            <button className='btn'><FontAwesomeIcon icon={faArrowRight} className='text-light'/></button>
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <FontAwesomeIcon  icon={faFacebook}/>
            <FontAwesomeIcon  icon={faInstagram}/>
            <FontAwesomeIcon  icon={faTwitter}/>
            <FontAwesomeIcon  icon={faYoutube}/>
            
            
          </div>
        </div>
      </div>
      <p className='fw-bolder'>Copyright @ July 2025 Batch, Daily Cart. Built with
React Redux.</p>
    </>
  )
}

export default Footer