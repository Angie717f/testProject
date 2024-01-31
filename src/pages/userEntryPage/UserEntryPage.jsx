import React from 'react'
import RegisterImage from '../../asset/images/register.png' 
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import './UserEntryPage.css'

const UserEntryPage = () => {
  return (
    <div className='user_entry-page'>
      <div className='user_entry-block'>
        <div className='user_enrty-image'>
           <img src={RegisterImage} alt="registerImage" />
        </div>  
        <div className='user-entry-outlet'>
            <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default UserEntryPage