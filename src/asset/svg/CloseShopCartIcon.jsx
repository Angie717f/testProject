import React from 'react'

const CloseShopCartIcon = ({openCart}) => {
  return (
    <svg 
      onClick={openCart}
    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#e3e3e3" d="M18.3,5.71a1,1,0,0,0-1.41,0L12,10.59,7.11,5.7A1,1,0,0,0,5.7,7.11L10.59,12,5.7,16.89A1,1,0,0,0,7.11,18.3L12,13.41l4.89,4.89a1,1,0,0,0,1.41-1.41L13.41,12,18.3,7.11A1,1,0,0,0,18.3,5.71Z"></path></svg>
  )
}

export default CloseShopCartIcon