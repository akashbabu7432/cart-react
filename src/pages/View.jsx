import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addtowishlist } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addtocart } from '../redux/slices/carttSlice'
function View() {
  const userwishlist = useSelector(state => state.wishlistReducer)
  const usercart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  // get product id from url
  const {id}  = useParams()
  // console.log(id);
  // state for storing product to be viewed
  const [product, setProduct] = useState({})
  // console.log(product)

  useEffect(()=>{
    if(sessionStorage.getItem('products')){
      const allproducts = JSON.parse(sessionStorage.getItem('products'))
      setProduct(allproducts.find(item=>item.id==id))
    }
  },[])

  const handlewishlist =()=>{
    const existingProducts = userwishlist?.find(item=>item.id==id)
    if(existingProducts){
      // alert('Product already exists in wishlist')
      Swal.fire({
      title: 'Error!',
      text: 'Product already exists in wishlist',
      icon: 'error',
      confirmButtonText: 'ok'
})
    } else{

        dispatch(addtowishlist(product))
    }

  }

  const handlecart=()=>{ 
    const existingProducts = usercart?.find(item=>item.id==id)
    dispatch(addtocart(product))
     Swal.fire({
      title: 'sucsess',
      text: existingProducts?`quantity of ${product.title}  updated successfully`: 'Product added',
      icon: 'sucess',
      confirmButtonText: 'ok'
})


  }
  return (
    <>
      <Header/>
      <div className="container ">
        <div className="row my-5"> 
          <div className="col-md-6">
            <img className='img-fluid' src={product?.thumbnail} alt="product" />
            <div className="d-flex my-2 justify-content-between">
              <button onClick={handlewishlist} className="btn btn-outline-dark">Add to wishlist</button>
              <button onClick={handlecart} className="btn btn-dark">add to cart</button>
            </div>
          </div>
          <div className="col-md-6">
            <h1>{product?.title}</h1>
            <h3 className='text-danger'>{product?.price}</h3>
            <h4>{product?.brand}</h4>
            <h4>{product?.category}</h4>
            <h4>{product?.description}</h4>


            <h3 className='my-3'>client review</h3>
            {
              product?.reviews?.length>0?
              product?.reviews?.map((item,index)=>(
              <div key={index} className="border rounded p-3 shadow">
              <p><span className='fw-bolder'>{item?.reviewerName}:</span>{item?.comment}</p>
              <p>rating:{item?.rating} <FontAwesomeIcon icon={faStar} className='text-warning'/></p>
             </div>
             ))
             :
             <div >No Reviews</div>
           }
          </div>
        </div>
      </div>
    </>
  )
}

export default View