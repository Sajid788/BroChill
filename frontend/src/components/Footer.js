import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow-md mt-10 flex justify-between items-center text-gray-600 text-sm">
      <p>© 2025 Blog UI. All rights reserved.</p>
      <div className="flex gap-4">
        <Link to="#" className="hover:underline">Privacy Policy</Link>
        <Link to="#" className="hover:underline">Terms of Service</Link>
      </div>
    </footer>
  )
}

export default Footer
