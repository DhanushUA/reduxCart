// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { useEffect } from "react";
import { getAllproducts } from "../redux/silces/productSilce";
import Swal from "sweetalert2";
import { addToWishlist } from "../redux/silces/wishlistSlice";
import { addCart } from "../redux/silces/cartSlice";

function View() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userWishlist =useSelector(state=>state.WishlistReducer)
  const userCart = useSelector(state=>state.CartReducer)
  const { loading, allproducts, error } = useSelector(
    (state) => state.productReducer
  );
  const product = allproducts.find((item) => String(item.id) === id);

  useEffect(() => {
    if (allproducts.length === 0) {
      dispatch(getAllproducts());
    }
  }, [dispatch, allproducts.length]);

  const handleWishlist = () =>{
    const existingItem = userWishlist?.find(item=>item.id==product?.id)
    if(existingItem){
      Swal.fire({
        title:"sorry",
        text:"product already in your wishlist",
        icon:"error",
        confirmButtonText:"ok"
      })

    }else{
      dispatch(addToWishlist(product))
    }
  }

    const handleCart = () =>{
    const existingItem = userCart?.find(item=>item.id==product?.id)
    dispatch(addCart(product))
      Swal.fire({
        title:"success",
        text: existingItem ? `${existingItem.title} quqntity increment  ` : "product added in your wishlist",
        icon:"success",
        confirmButtonText:"ok"
      })
    }


  return (
    <>
      <Header />
      <div className="container my-5 pt-5">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-danger">{error}</div>
        ) : product ? (
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={product.thumbnail} alt={product.title} className="img-fluid" />
              <div className="d-flex justify-content-evenly">
                <button onClick={handleWishlist} className="btn btn-danger mt-3 ms-3">Add to Wishlist</button>
                <button onClick={handleCart} className="btn btn-success mt-3">Add to Cart</button>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold">{product.title}</h2>
              <h4 className="fw-bold">$: {product.price}</h4>
              <h4 className="fw-bold">Brand: {product.brand}</h4>
              <h4 className="fw-bold">Category: {product.category}</h4>
              <h4 className="fw-bold">Description: {product.description}</h4>
              <h5 className="fw-bold">Client Reviews</h5>
              {product.reviews?.map((item, index) => (
                <div key={`${item.reviewerName}-${index}`} className="border rounded p-2 shadow my-5">
                  <p>
                    <span className="fw-bolder">Name: {item.reviewerName}</span>{" "}
                    {item.comment}
                  </p>
                  <p>
                    Rating: {item.rating}{" "}
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "rgb(255, 212, 59)" }}
                      className="text-warning"
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">Product not found.</div>
        )}
      </div>
    </>
  );
}

export default View;
