// import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="m-5">
      <div className="row">
        {/* Duplicate column accroding to products  */}
        <div className="col-3">
            {/* cards */}
         <Card >
      <Card.Img style={{ height:"250px"}} variant="top" src="https://png.pngtree.com/png-vector/20250319/ourmid/pngtree-elegant-pink-perfume-bottle-for-women-clipart-illustration-png-image_15771804.png" />
      <Card.Body className='text-center'>
        <Card.Title>Card Title</Card.Title>
        <Link to={`/products/:id`}className='btn btn-primary'> View More</Link>
      </Card.Body>
    </Card>

        </div>
      </div>
    </div>
  )
}

export default Products
