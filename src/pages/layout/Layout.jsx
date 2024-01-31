import React from 'react'
import Header from '../../components/header/Header';
import Barrer from "../../components/barrer/Barrer";
import Wrapper from '../../components/wrapper/Wrapper';
import Footer from '../../components/footer/Footer';
import './Layout.css'


const Layout = () => {
  return (
    <>
      <Header/>
      <div className='layout'>
       <Barrer/> 
       <main>
        <Wrapper/>
       </main>
          <Footer/>
      </div>
    </>
  )
}

export default Layout