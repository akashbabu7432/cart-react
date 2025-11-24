import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import wishlistSlice from "./slices/wishlistSlice";
import carttSlice from "./slices/carttSlice";

const cartStore = configureStore({
  reducer: {
    productReducer: productSlice,
    wishlistReducer: wishlistSlice
    , cartReducer: carttSlice

  }
})
export default cartStore