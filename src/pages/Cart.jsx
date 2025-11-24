import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, emptycart, increment, removeCartitem } from '../redux/slices/carttSlice'
import Swal from 'sweetalert2'


function Cart() {
  const usercart = useSelector(state=>state.cartReducer)
  const [sum,setsum]=useState(0)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(()=>{
    setsum(usercart?.reduce((acc,curr)=>acc+ curr.totalprice,0))

  },[usercart])


  const handledecrement=(product)=>{
    if(product.quantity>1){
      dispatch(decrement(product))

    }else{
      dispatch(removeCartitem(product.id))

    }
  } 

  const checkout=()=>{
    dispatch(emptycart())
    navigate('/')
    Swal.fire({
      title: 'order  placed',
      text: 'Thank  you for shopping',
      icon: 'success',
      confirmButtonText: 'ok'
})
  }
  return (
    <>
    <header/>
    <div className="container py-2">
      {
        usercart?.length>0?
        <div className="my-5">
        <h1 className='text-danger fw-bold'>Cart Summary</h1>
        <div className="row">
          <div className="col-md-8 border rounded p-3"> 
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  
                  <th>...</th>
                </tr>
              </thead>

              {
                usercart?.map((product,index)=>(
                  <tbody>
                <tr>
                  <td>{index+1}</td>
                  <td>{product?.title}</td>
                  <td><img width={'50px'} height={'30px'} src={product?.thumbnail} alt="" /></td>
                  <td> <div className="d-flex">
                    <button onClick={()=>handledecrement(product)} className="btn fs-3 fw-bold">-</button>
                    <input style={{width:'68px' }} type="text" className='form-control' value={product.quantity} readOnly  />
                    <button onClick={()=>dispatch(increment(product))} className="btn fs-3 fw-bold">+</button>
                    </div></td>
                  <td> ${product?.totalprice}</td>
                  <td> <button onClick={()=>dispatch(removeCartitem(product?.id))} className="btn text-danger "><FontAwesomeIcon icon={faTrash}/></button></td>
                </tr>
              </tbody>

                ))
                }
            </table>
            <div className="float-end my-3">
              <button onClick={()=>dispatch(emptycart())} className='btn btn-danger me-2'>empty cart</button>
              <Link to={'/'} className='btn btn-success'>shop more</Link>
            </div>
  

          </div>
          <div className="col-md-4">
            <div className="border rounded p-5">
              <h4 className='fw-bold' > Total Amount:<span className='text-danger'>${sum}</span></h4>
              <hr />
              <div className="d-grid mt-2">
                <button onClick={checkout} className='btn btn-success'>CHECK OUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <div className='d-flex justify-content-center align-items-center flex-column'>
      
              <h1>cart is Empty</h1>
              <Link to={'/'} className='btn btn-primary'>add More</Link>
              </div>
       
      }


    </div>
    </>
  )
}

export default Cart