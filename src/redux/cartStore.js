import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./silces/productSilce";
// import Wishlist from "../pages/Wishlist";
// import Cart from "../pages/Cart";
import cartSlice from "./silces/cartSlice";
import wishlistSlice from "./silces/wishlistSlice"
import productSlice from './silces/productSilce'

const cartStore = configureStore({
  reducer: {
    productReducer:productSlice,
     WishlistReducer:wishlistSlice,
    CartReducer:cartSlice
  },
});

export default cartStore;