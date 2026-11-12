// import React from 'react'
import { Link, Navigate } from "react-router-dom"
import Header from "../components/Header"
import { useDispatch, useSelector } from "react-redux"
import { removeCartItem } from "../redux/silces/cartSlice"
import { incrementCart } from "../redux/silces/cartSlice"
import {decrementCart } from "../redux/silces/cartSlice"
import { useEffect, useState } from "react"
import { emptyCart } from "../redux/silces/cartSlice"
import Swal from "sweetalert2"


function Cart() {

  const userCart = useSelector(state=>state.CartReducer)
  const dispatch = useDispatch()
  const [CartTotal,setCartTotal] = useState(0)

  useEffect(()=>{
      setCartTotal(userCart?.reduce((accu , curr)=>accu + curr.totalPrice,0))
  },[userCart])

  const handleDecrementCart = (product) => {
    if(product.quantity>1){
      dispatch(decrementCart(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const handleCheckout = () => {
    dispatch(emptyCart())
    Swal({
      title:"order placed successfully",
      text:"thanks you for purchasing with us",
      icon:"success",
      confirmbuttontext:"ok"
    })
    Navigate('/')


  }



  return (
    <>
 <Header />
     {
      userCart.length>0 ?
        <div className='container my-5'>
      <h1 className="pt-5 text-primary fw-bold">user's cart</h1>
      <div className='row'>
        <div className='col-lg-8 border shadow'>
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
               <th>product</th>
                <th> image</th>
                 <th>quantity</th>
                 <th>price</th>
                 <th>....</th>
            </tr>
          </thead>
          <tbody>
            {
              userCart.map((item,index)=>(
               <tr key={(item?.id)}>
              <td>{index+1}</td>
             <td> {item?.title}</td>
             <td>  <img width={'50px'} height={'50px'} src={item?.thumbnail} alt="product"></img> </td>
             <td>
               <div className='d-flex'>
                  <button onClick={()=>handleDecrementCart(item)} className='btn fs-1'>-</button>
                 <input style={{width:'40px'}} value={item?.quantity}  type="text" className="form-control" readOnly/>
                 <button onClick={()=>dispatch(incrementCart(item?.id))} className='btn fs-1'>+</button>
               </div>
             </td>
             <td>${item?.totalPrice} </td>
             <td onClick={()=>dispatch(removeCartItem(item?.id))}> X  </td>
            </tr>
              ))
              }
          </tbody>
        </table>
        <div className="float-end">
         <button onClick={()=>dispatch(emptyCart())} className="btn btn-danger">EMPTY CART</button>
         <Link to={'/'} className='btn btn-info ms-4'> Shop More </Link>
        </div>
        </div>
        <div className='col-lg-4'>
          <div className="border shadow rounded">
            <h3>  total Amount :   <span className="text-danger">${CartTotal}</span> </h3>
            <hr/>
            <button onClick={handleCheckout} className="btn btn-success w-75"> CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
    :
   <div className='d-flex justify-content-center align-items-center flex-column'>
          <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06TqVFDW3zU7axHdEAFGJggHJwh8ij3SK0F_lqzf_JKjklDU55RcEnP7k&s=10" alt=""/>
          <h1> your wishlist is empty</h1>
          <Link to={'/'} className='btn btn-primary'> Add more</Link>
          </div>
      }

    </>

  )
}

export default Cart
