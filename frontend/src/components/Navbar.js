import React from 'react'
import { FaBars, FaSearchengin, FaUser } from 'react-icons/fa6'


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className='flex gap-6 items-center'>
      <button className="text-xl">
        <FaBars />
      </button>
      <h1 className="text-2xl font-bold">Blogs</h1>
      </div>
      <div className="flex items-center gap-4">
        <FaSearchengin className="text-gray-500" />
        <FaUser className="text-gray-500" />
      </div>
    </nav>
  )
}

export default Navbar
