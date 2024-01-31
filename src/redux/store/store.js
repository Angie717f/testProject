import { configureStore } from "@reduxjs/toolkit";
import { shopCartReducer } from "../slice/shopCart/shopCartSlice";
import { productReducer } from "../slice/product/productSlice";
import { mapReducer } from "../slice/map/mapSlice";
import { ignorEmpatyProduct, resetProductsData } from "../slice/product/middleware";


export const store = configureStore({
  reducer: {  
    shopCart: shopCartReducer,
    product: productReducer,
    map: mapReducer
  }, 
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ignorEmpatyProduct, resetProductsData ]

})