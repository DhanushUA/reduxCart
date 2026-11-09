import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./silces/productSilce";
// import Wishlist from "../pages/Wishlist";
// import Cart from "../pages/Cart";
import productSlice from './silces/productSilce'

const cartStore = configureStore({
  reducer: {
    productReducer:productSlice
    // WishlistReducer:{},
    //  CartReducer:{}
  },
});

export default cartStore;