import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchForm from '../../searchForm/SearchForm'
import './Content.css'

const Content = () => {
  return (
    <div  className='outlet-content'>
       <SearchForm/>
      <div className='content'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Content