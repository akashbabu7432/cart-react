import { Card } from 'react-bootstrap'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllProducts} from '../redux/slices/productSlice'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'




function Home() {
  const dispatch = useDispatch()
  const{loading,allProducts,error}= useSelector(state => state.productReducer)
  const [page, setPage] = useState(1)
  const productperpage=8
  const totalpages=Math.ceil(allProducts?.length/productperpage)

  const pageitemslastindex=page*productperpage
  const pagestartindex=pageitemslastindex-productperpage
  const visibleproducts=allProducts?.slice(pagestartindex,pageitemslastindex)
  // console.log(allProducts);
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const navigatenextpage=()=>{
    if(page!=totalpages){
      setPage(page+1)
    }
  }

  const navigatepreviouspage=()=>{
    if(page!=1){
      setPage(page-1)
    }
  }
  return (
    <> 
    
     <Header insideHome={true}/>
    <div className='container  py-5'>
     {
      loading?
      <div className='text-center my-5 fw-bolder fs-5'><img width={'80px'} className='me-2' src="" alt="" />Loading</div>
      :
      <div className="row my-5" >
        

      {/* duplicate card ------------------------*/}
      {
        allProducts?.length>0?
        visibleproducts?.map(product=>(
          
        
        <div key={product?.id} className="col-md-3 mb-2">
        <Card >
          <Card.Img height={'150px'} variant="top" src={product?.thumbnail} />
          <Card.Body className='text-center'>
            <Card.Title>{product?.title}</Card.Title>
            <Link to={`/products/${product?.id}/view`} className='btn btn-secondary'> View More...</Link>
          
          </Card.Body>
        </Card>

      </div>
      ))
      :
      <p className='fs-5 '>product not found</p>
      }

      <div className="my-3 text-center " >
        <button onClick={navigatepreviouspage} className='btn'> <FontAwesomeIcon icon={faBackward} /></button>
        <span className="fw-bolder">{page} of {totalpages}</span>
        <button onClick={navigatenextpage} className='btn'> <FontAwesomeIcon icon={faForward} /></button>
      </div>

      {/* ------------------- */}
     </div>
     
     }


    </div>
    </>
  )
}

export default Home