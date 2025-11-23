import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ShopCart/productSlice";
import cartReducer from "../features/ShopCart/CartSlice";
const store = configureStore({
  reducer: {
    products : productReducer,     
    cart: cartReducer  
    },      
});
export default store;