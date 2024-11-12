import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <div className='bg-bgPrimary min-h-screen flex flex-col'>
        <Navbar />
        <div className='flex-grow'>
          {/* Chứa các children ở router.jsx */}
          <Outlet />
        </div>
        <footer className='mt-auto'>Footer</footer>
      </div>
    </>
  )
}

export default App