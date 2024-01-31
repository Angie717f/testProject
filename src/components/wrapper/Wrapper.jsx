import React from 'react'
import AsideNavBar from '../main/asideNavbar/AsideNavBar'
import Content from '../main/content/Content'
import './Wrapper.css'

const Wrapper = () => {
  return (
    <div className='wrapper container'>
        <AsideNavBar/>
        <Content/>
    </div>
  )
}

export default Wrapper