// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function View() {
  return (
    <div className='container my-5'>
      <div style={{ height:'80vh'}} className='row align-items-center'>
       <div className='col-lg-6'>
        <img src="https://sb.kaleidousercontent.com/67418/1920x1100/0135fd63fd/transparent-boots.png" alt="product" className='img-fluid' ></img>
        <div className='d-flex justify-content-evenly'>
         <button className='btn btn-danger mt-3 ms-3'>Add to Wishlist</button>
         <button className='btn btn-success mt-3'>Add to Cart</button>
        </div>
       </div>
       <div className='col-lg-6 '>
        <h2 className="fw-bold"> Title</h2>
        <h4 className="fw-bold">Price : $ 100</h4>
        <h4 className="fw-bold">Category :</h4>
        <h4 className="fw-bold">Description</h4>
        <h5 className="fw-bold"> Client Reviews </h5>
        <div className='border rounded shadow'>
          <p> <span className="fw-bolder"> Name: </span> message </p>
          <p> Rating: 5  <FontAwesomeIcon icon={faStar} style={{color: "rgb(255, 212, 59)",}} className="text-warning" />   </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default View
