import { Card } from 'react-bootstrap'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import React from 'react'


function Home() {
  return (
    <> 
    
     <Header/>
    <div className='container  py-5'>
     <div className="row my-5" >
      {/* duplicate card ------------------------*/}
      <div className="col-md-3 mb-2">
        <Card >
          <Card.Img height={'150px'} variant="top" src="src\assets\61N+L0R6xdL._AC_UL480_FMwebp_QL65_.webp" />
          <Card.Body className='text-center'>
            <Card.Title>Card Title</Card.Title>
            <Link to={`/products/id/view`} className='btn btn-secondary'> View More...</Link>
          
          </Card.Body>
        </Card>

      </div>
      {/* ------------------- */}
     </div>


    </div>
    </>
  )
}

export default Home