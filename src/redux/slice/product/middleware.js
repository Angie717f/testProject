import { fetchProducts } from "./productRequest";

export const ignorEmpatyProduct = (store) => (next) => (action) => {
  const {text} = store.getState().product
  
  if(action.type === 'product/onSearch' && !text.trim()) return
  next(action);
}

export const resetProductsData = (store) => (next) => (action) => {

  if(action.type === 'product/onFilterByCategories' && action.payload.product === 'All') {
    store.dispatch(fetchProducts())
    // console.log(action.payload.product) 
  }

  next(action)
}