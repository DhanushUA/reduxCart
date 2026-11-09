// import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {getAllproducts} from "../redux/silces/productSilce"
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';

function Products() {
  const { loading, allproducts, error } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();

  // pagination simple logic
   const [currentPage , setcurrentPage] = useState(1)
   const productperPage = 8
   const totalPages = Math.ceil(allproducts?.length/productperPage)
   const currentPageLastIndex = currentPage * productperPage
   const currentPageFirstIndex = currentPageLastIndex - productperPage
   const visibleProductArray = allproducts?.slice(currentPageFirstIndex,currentPageLastIndex)

   const navigateNextPage = () => {
    currentPage != totalPages && setcurrentPage(currentPage+1)
   }
   const navigatePrevPage = () =>{
    currentPage != 1 && setcurrentPage(currentPage -1)
   }


  useEffect(() => {
    dispatch(getAllproducts());
  }, [dispatch]);

  return (
    <>
    <Header insideProduct/>
     <div className="m-5">
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-center text-danger">{error}</div>
      ) : (
        <div className="row pt-5">
          {allproducts.length > 0 ? (
            visibleProductArray.map((product) => (
              <div key={product.id} className="col-3">
                <Card className="shadow p-2">
                  <Card.Img
                    style={{ height: "250px" }}
                    variant="top"
                    src={product.thumbnail}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{product?.title}</Card.Title>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-primary"
                    >
                      View More
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <div className="fw-bolder">No products found</div>
          )}
        </div>
      )}
      <div className='text-center my-5 fs-2 fw-bolder'>
      <button onClick={navigatePrevPage} className='btn' ><FontAwesomeIcon icon={faBackward} /> </button>
      {currentPage} of {totalPages}
      <button onClick={navigateNextPage} className='btn' > <FontAwesomeIcon icon={faForward} /> </button>
      </div>
    </div>

 </>
  );
}

export default Products;
