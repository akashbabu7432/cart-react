import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function View() {
  return (
    <>
      <Header/>
      <div className="container ">
        <div className="row my-5"> 
          <div className="col-md-6">
            <img className='img-fluid' src="http://localhost:5174/src/assets/61N+L0R6xdL._AC_UL480_FMwebp_QL65_.webp" alt="product" />
            <div className="d-flex my-2 justify-content-between">
              <button className="btn btn-outline-dark">Add to Cart</button>
              <button className="btn btn-dark">Buy Now</button>
            </div>
          </div>
          <div className="col-md-6">
            <h1>New Balance</h1>
            <h3 className='text-danger'>1000/-</h3>
            <h4>Brand:</h4>
            <h4>category:</h4>
            <h4>Description:</h4>


            <h3 className='my-3'>client review</h3>
            <div className="border rounded p-3 shadow">
              <p><span className='fw-bolder'>username:</span>message</p>
              <p>rating:number <FontAwesomeIcon icon={faStar} className='text-warning'/></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View