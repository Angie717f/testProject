import React from 'react'
import ShopCartBasketIcon from '../../asset/svg/ShopCartBasketIcon'
import CloseShopCartIcon from '../../asset/svg/CloseShopCartIcon'
import './ShopCart.css'

const ShopCart = ({openCart}) => {
  return (
    <div className="shop-cart">
      <div className='close-cart'>
        <CloseShopCartIcon openCart={openCart}/>
      </div>
      <div className='cart-product'>
        <h2>Your shopping cart is empty.</h2>
        <ShopCartBasketIcon/>
      </div>
    </div>
  )
}

export default ShopCart;