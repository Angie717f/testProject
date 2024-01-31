import BasketIcon from '../../../asset/svg/BasketIcon'
import ShopCart from "../../shopCart/ShopCart";
import {useSelector, useDispatch} from 'react-redux'
import { onHandlerCart, selectShopCart } from "../../../redux/slice/shopCart/shopCartSlice";
import './Basket.css'

const Basket = () => {

  const dispatch = useDispatch();
  const {handlerCart} = useSelector(selectShopCart)
  
  const openCart = (e) => {
    console.log(e.currentTarget);
    dispatch(onHandlerCart())
  }

  return (
    <div className="basket-block"  >
      <div className="basket" onClick={openCart}>
       <BasketIcon />
      </div>
      <div>
        {handlerCart && <ShopCart openCart={openCart} />}
      </div>
    </div>
  );

};

export default Basket;
