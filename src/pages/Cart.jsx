// import React from 'react'
import { Link } from "react-router-dom"

function Cart() {
  return (
    <div className='container my-5'>
      <h1 className="pt-5 text-primary fw-bold">user's cart</h1>
      <div className='row'>
        <div className='col-lg-8 border shadow'>
        <table className='table'>
          <thead>
            <tr>
               <th>product</th>
                <th> image</th>
                 <th>quantity</th>
                 <th>price</th>
                 <th>....</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             <td></td>
             <td>  <img width={'50px'} height={'50px'} src="https://external-cdn.morphic.com/website-production/assets/seo/images/seo/28th%20may%20batch%202/e-commerce-product-photo-images/e-commerce-product-photo-images-3x4-01.webp?tr=w-448,q-80" alt="product"></img> </td>
             <td>
               <div className='d-flex'>
                 <button className='btn fs-1'>-</button>
                 <input style={{width:'40px'}} value={10}  type="text" className="form-control"></input>
                 <button className='btn fs-1'>+</button>

               </div>
             </td>
             <td>$ </td>
             <td> </td>

            </tr>
          </tbody>
        </table>
        <div className="float-end">
         <button className="btn btn-danger">EMPTY CART</button>
         <Link to={'/'} className='btn btn-info ms-4'> Shop More </Link>
        </div>
        </div>
        <div className='col-lg-4'>
          <div className="border shadow rounded">
            <h3>  total Amount :   <span className="text-danger"> $ 300</span> </h3>
            <hr/>
            <button className="btn btn-success w-25"> CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
