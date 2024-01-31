import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productRequest";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    findCategory: [],
    checkProducts: [],
    searchingProducts: null,
    status: null,
    error: null,
    text: ''
  },
  reducers: {
    onFilterByCategories: (state, {payload}) => {
      state.products = state.products.map((el) => el.cuisine === payload.product ? {...el, isChecked: payload.isChecked} : el)
      state.checkProducts = state.products.filter((el) => el.isChecked);
    },
    onText: (state, {payload}) => {
      state.text = payload
    },
    onSearch: (state) => {
     state.searchingProducts = state.products.filter((prod) => prod.cuisine.toLowerCase() === state.text.toLowerCase())
     state.text = ''
    }
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading';
      state.error = null
    },
    [fetchProducts.fulfilled]: (state, {payload}) => {
      state.status = 'resolve'
      state.products = payload.map((el) => ({
        ...el, 
        id: Math.random(),
        isChecked: false, 
        minOrder: 2000, 
        rating: Math.floor(Math.random() * 5) + '.' + Math.floor(Math.random() * 5), 
        workingHours: "10:00 AM - 8:00 PM"
      }))
      state.findCategory = payload.reduce((aggr, item) =>
           aggr.includes(item.cuisine) ? aggr : [...aggr, item.cuisine], [])
    },
    [fetchProducts.rejected]: (state, {payload}) => {
      state.status = 'rejected';
      state.error = payload;
    }
  }
});

export const { onCategory, onFilterByCategories, onChecked, onSearch, onText } = productSlice.actions

export const selectProduct = (state) => state.product.products;
export const selectFindCategory = (state) => state.product.findCategory;
export const selectCheckProducts = (state) => state.product.checkProducts;
export const selectSearchingProducts = (state) => state.product.searchingProducts;
export const selectText = (state) => state.product.text;
export const selectStatus = (state) => state.product.status;
export const selectError = (state) => state.product.error;

export const productReducer = productSlice.reducer;


