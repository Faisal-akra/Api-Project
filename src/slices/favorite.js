
import { createSlice } from "@reduxjs/toolkit";



export const favSlice = createSlice({
  name: "favorite",

  initialState: {
    products: []
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const isExist = state.products.find(
        (item) => item.id === action.payload.id
      )

      if(isExist) {
        state.products = state.products.filter(
          (item) => item.id !== action.payload.id
        )
      }else{
        state.products.push(action.payload.id)
      }
    }
  }
})


export default favSlice.reducer;

export const {toggleFavorite} = favSlice.actions



























