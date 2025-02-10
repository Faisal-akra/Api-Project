import { configureStore } from "@reduxjs/toolkit";
import product from '../slices/products'
import favorite from "../slices/favorite"
export const myStore = configureStore({
  reducer: {
    products: product,
    favoriteslice: favorite,
    

    
  },
});








