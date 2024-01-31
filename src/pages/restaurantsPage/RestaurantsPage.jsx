import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Restaurants from "../../components/restaurants/Restaurants";
import {fetchProducts} from "../../redux/slice/product/productRequest";
import { selectCheckProducts, selectError, selectProduct, selectStatus, selectSearchingProducts } from "../../redux/slice/product/productSlice";

const RestaurantsPage = () => {
  const products = useSelector(selectProduct);
  const checkProducts = useSelector(selectCheckProducts);
  const searchingProducts = useSelector(selectSearchingProducts)
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  
  useEffect(() => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="products-block">
      {status === 'loading' && <h1>Server Loading...</h1>}
      {error && <h1>{error}...</h1>}

      {(checkProducts.length > 0 ? checkProducts : (searchingProducts || products))?.map((prod) => {
        return (
          <div key={prod.id} className="products">
            <Restaurants productsData={prod} />
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantsPage;
