import React from 'react'
import { NavLink } from 'react-router-dom'
import RestaurantIcon from '../../../asset/svg/RestaurantIcon'
import DiscoutnIcon from '../../../asset/svg/DiscoutnIcon'
import ShopIcon from '../../../asset/svg/ShopIcon'
import AsideFilters from './AsideFilters'
import './AsideNavBar.css'


const AsideNavBar = () => {
  return (
    <nav className='navigation'>
      <div className='navbar'>
        <div className='nav-routes'>
         <div className='restoran'>
          {/* <NavLink to='restaurants'> */}
          <NavLink to='/'>
          <RestaurantIcon />
            Restaurants</NavLink>
         </div>
         <div className='shop'>
          <NavLink to='shop'>
          <ShopIcon/>
            Shops</NavLink>
         </div>
         <div className='discount'>
          <NavLink to='discounts'>
          <DiscoutnIcon/>
            Discounts</NavLink>
         </div>
        </div>
        <AsideFilters/>
      </div>
    </nav>
  )
}

export default AsideNavBar;