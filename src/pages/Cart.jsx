import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
function Cart() {
  return (
    <>
    <header/>
    <div className="container py-2">
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
              <tbody>
                <tr>
                  <td>1</td>
                  <td>title</td>
                  <td><img width={'50px'} height={'30px'} src="src\assets\61N+L0R6xdL._AC_UL480_FMwebp_QL65_.webp" alt="" /></td>
                  <td> <div className="d-flex">
                    <button className="btn fs-3 fw-bold">-</button>
                    <input style={{width:'68px' }} type="text" className='form-control' value={10} readOnly  />
                    <button className="btn fs-3 fw-bold">+</button>
                    </div></td>
                  <td> price</td>
                  <td> <button className="btn text-danger "><FontAwesomeIcon icon={faTrash}/></button></td>
                </tr>
              </tbody>
            </table>

          </div>
          <div className="col-md-4">
            <div className="border rounded p-5">
              <h4 className='fw-bold' > Total Amount:<span className='text-danger'>price</span></h4>
              <hr />
              <div className="d-grid mt-2">
                <button className='btn btn-success'>CHECK OUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart