import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import RestaurantsPage from '../pages/restaurantsPage/RestaurantsPage'
import DiscountPage from '../pages/discountPage/DiscountPage'
import ShopsPage from '../pages/shopsPage/ShopsPage'
import RegisterPage from '../pages/registerPage/RegisterPage'
import LoginPage from '../pages/loginPage/LoginPage'
import LayoutUserEntry from '../pages/layoutUserEntry/LayoutUserEntry'
import UserEntryPage from '../pages/userEntryPage/UserEntryPage'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='restaurants' element={<RestaurantsPage/>} />
            <Route path='shop' element={<ShopsPage/>} />
            <Route path='discounts' element={<DiscountPage/>} />
        </Route>

         <Route path='/' element={<LayoutUserEntry/>}>
           <Route index element={<UserEntryPage/>} />
           <Route path='login' element={<LoginPage/>} />
           <Route path='register' element={<RegisterPage/>} />
         </Route>
      </Routes>
    </>
  );
};

export default AppRoutes