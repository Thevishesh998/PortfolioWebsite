import React from 'react'
import Navbar from './componants/Navbar'
import Home from './componants/Home'
import About from './componants/About'
import Portfolio from './componants/portfolio'
import Experiance from './componants/Experiance'
import Footer from './componants/Footer'
import Contact from './componants/Contact'


function App(){
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    {/* <Portfolio/> */}
    <Experiance/>
    
    <Contact/>
    <Footer/>

    </>

  )

}

export default App