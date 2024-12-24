import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div className='min-h-screen max-w-full w-3/4  mb-10 mx-auto pt-10'>
     <Navbar/>
     <Home/>
      
    </div>
  )
}

export default App
