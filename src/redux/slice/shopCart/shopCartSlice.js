import { createSlice } from "@reduxjs/toolkit";

const shopCartSlice = createSlice({
  name: 'shopCart',
  initialState: {
    handlerCart: false
  },
  reducers: {
    onHandlerCart: (state) => {
      state.handlerCart = !state.handlerCart 
    }
  }
})

export const shopCartReducer = shopCartSlice.reducer;
export const {onHandlerCart} = shopCartSlice.actions;

export const selectShopCart = (state) => state.shopCart;