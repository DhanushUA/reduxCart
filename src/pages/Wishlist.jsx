// import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Wishlist() {
  const userWishlist = useSelector(state=>state.WishlistReducer)
  return (
    <>
    <Header />
 <div className='container my-5 '>

     {
        userWishlist?.length>0 ?
        <>
      <h1 className="pt-5 text-primary fw-bold">user's wishlist</h1>
        <div className="row">
        {
        userWishlist?.map(item=>(
          <div className="col-3">
            {/* cards */}
         <Card className='shadow p-2'>
      <Card.Img style={{ height:"250px"}} variant="top" src={item?.thumbnail} />
      <Card.Body className='text-center'>
        <Card.Title>{item?.title}</Card.Title>
         <div className='d-flex justify-content-evenly'>
          <button className ='btn text-danger fs-4'> <FontAwesomeIcon icon={faHeartCircleXmark} /></button>
          <button className='btn text-success fs-4'> <FontAwesomeIcon icon={faCartPlus} style={{color: "rgb(255, 212, 59)",}} /> </button>
          </div>

        < div className='btn btn-primary'> View More</div>
      </Card.Body>
    </Card>
</div>
          ))
        }
        </div>
        </>
        :
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06TqVFDW3zU7axHdEAFGJggHJwh8ij3SK0F_lqzf_JKjklDU55RcEnP7k&s=10" alt=""/>
          <h1> your wishlist is empty</h1>
          <Link to={'/'} className='btn btn-primary'> Add more</Link>
          </div>

     }


    </div>

    </>


  )
}

export default Wishlist
