import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between px-4 h-16 items-center'>
      <div className="logo font-bold flex items-center justify-center">
        <span>
        <lord-icon
              src="https://cdn.lordicon.com/tonguyuk.json"
              trigger="loop"
              delay="2000"
              colors="primary:#ebe6ef,secondary:#b4b4b4,tertiary:#ffffff"
              className="w-[20px] h-[20px]">
            </lord-icon>
        </span>
        GetMeAChai</div>
      <ul className='flex justify-between gap-3'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>SignUP</li>
          <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
