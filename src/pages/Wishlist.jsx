import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleCheck, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removefromwishlist } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addtocart } from '../redux/slices/carttSlice'


function Wishlist() {
  const userwishlist=useSelector(state => state.wishlistReducer)
  const usercart = useSelector(state => state.cartReducer)
  
  const dispatch = useDispatch()

   const handlecart=(product)=>{ 
      const existingProducts = usercart?.find(item=>item.id==product.id)
      dispatch(addtocart(product))
      dispatch(removefromwishlist(product.id))
       Swal.fire({
        title: 'sucsess',
        text: existingProducts?`quantity of ${product.title}  updated successfully`: 'Product added',
        icon: 'sucess',
        confirmButtonText: 'ok'
  })
  
  
    }
  return (
    <>
    <Header />
    <div className='container py-5'>
      {/* WishList content  goes here */}
      {
        userwishlist?.length>0?
        <div className='row my-5'>
        {
          userwishlist.map(product=>(
            <div className="col-md-3 mb-2">
              <Card >
                <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
                <Card.Body className='text-center'>
                  <Card.Title>{product?.title}</Card.Title>
                  <div className="d-flex my-1 justify-content-center">
                    <Button  onClick={()=>dispatch(removefromwishlist(product?.id))} className="btn btn-danger " ><FontAwesomeIcon icon={faHeartCircleXmark}/>
                    </Button>
                    <Button onClick={()=>handlecart(product)} className="btn btn-success " ><FontAwesomeIcon icon={faCartPlus}/>
                    </Button>
                  </div>
                
                </Card.Body>
              </Card>

      </div>
          ))
        }

      </div>
      :
      <div className='d-flex justify-content-center align-items-center flex-column'>

        <h1>Wishlist is Empty</h1>
        <Link to={'/'} className='btn btn-primary'>add More</Link>
        </div>
      
    }
      </div>
    </>
  )
}

export default Wishlist