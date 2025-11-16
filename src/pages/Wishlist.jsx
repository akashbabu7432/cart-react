import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleCheck, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from 'react-bootstrap'

function Wishlist() {
  return (
    <>
    <Header />
    <div className='container py-5'>
      {/* WishList content  goes here */}
      <div className='row my-5'>
        <div className="col-md-3 mb-2">
        <Card >
          <Card.Img height={'150px'} variant="top" src="src\assets\61N+L0R6xdL._AC_UL480_FMwebp_QL65_.webp" />
          <Card.Body className='text-center'>
            <Card.Title>Card Title</Card.Title>
            <div className="d-flex my-1 justify-content-center">
              <Button className="btn btn-danger " ><FontAwesomeIcon icon={faHeartCircleXmark}/>
              </Button>
              <Button className="btn btn-success " ><FontAwesomeIcon icon={faCartPlus}/>
              </Button>
            </div>
          
          </Card.Body>
        </Card>

      </div>

      </div>
      </div>
    </>
  )
}

export default Wishlist