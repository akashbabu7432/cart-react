import {  faCartShopping, faHeart, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Nav,Container,Navbar, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  searchProduct } from '../redux/slices/productSlice';


function Header({insideHome}) {
  const userCart= useSelector((state) => state.cartReducer);
  const userwishlist= useSelector((state) => state.wishlistReducer);
  const dispatch =  useDispatch();
  return (
  //   function BasicExample() {
  // return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link to={'/'} className='text-decoration-none text-dark'><FontAwesomeIcon icon={faTruck}/> Daliya cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-md-flex align-items-md-cemter">
            {/* <Nav.Link href="#home">Home</Nav.Link>

            <Nav.Link href="#link">Link</Nav.Link> */}
           {
            insideHome&&
            <Nav.Item ><input onChange={e=>dispatch(searchProduct(e.target.value))} type="text" className="form-control text-dark border-dark" placeholder='search by product name'/></Nav.Item>}


            <Link to={'/wishlist'} className='text-decoration-none text-dark fw-bold d-flex align-items-center'><FontAwesomeIcon icon=
            {faHeart} className='text-danger me-1'/> WISHLIST <Badge pill bg="dark"className='ms-1' >{userwishlist?.length}</Badge> </Link>
            <Link to={'/cart'} className='text-decoration-none text-dark fw-bold fw-bold d-flex align-items-center'> <FontAwesomeIcon icon=
              {faCartShopping} className='text-success me-1 '/> CART<Badge pill bg="dark" className
              ='ms-1' >{userCart.length}</Badge> </Link>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


//   )
// }

export default Header