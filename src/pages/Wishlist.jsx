// import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Header from '../components/Header'

function Wishlist() {
  return (
    <>
    <Header />
 <div className='container my-5 '>
      <h1 className="pt-5 text-primary fw-bold">user's wishlist</h1>
        <div className="row">
        {/* Duplicate column accroding to products  */}
        <div className="col-3">
            {/* cards */}
         <Card >
      <Card.Img style={{ height:"250px"}} variant="top" src="https://png.pngtree.com/png-vector/20250319/ourmid/pngtree-elegant-pink-perfume-bottle-for-women-clipart-illustration-png-image_15771804.png" />
      <Card.Body className='text-center'>
        <Card.Title>Perfume</Card.Title>
         <div className='d-flex justify-content-evenly'>
          <button className ='btn text-danger fs-4'> <FontAwesomeIcon icon={faHeartCircleXmark} /></button>
          <button className='btn text-success fs-4'> <FontAwesomeIcon icon={faCartPlus} style={{color: "rgb(255, 212, 59)",}} /> </button>
          </div>

        < div className='btn btn-primary'> View More</div>
      </Card.Body>
    </Card>

        </div>
      </div>
    </div>

    </>


  )
}

export default Wishlist
