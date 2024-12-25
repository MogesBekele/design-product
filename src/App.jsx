import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <div className='min-h-screen max-w-full w-3/4  mb-10 mx-auto pt-10'>
     <Navbar/>
     <Home/>
     <About/>
      
    </div>
  )
}

export default App
