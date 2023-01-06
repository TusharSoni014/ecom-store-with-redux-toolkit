import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import productSlice from "./slices/ProductSlice";

export default configureStore({
  reducer: {
    productReducer: productSlice, //its slice name but its a reducer.
    cartReducer: CartSlice, //its slice name but its a reducer.
  },
});
