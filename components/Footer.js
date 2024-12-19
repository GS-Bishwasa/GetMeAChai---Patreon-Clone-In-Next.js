import React from 'react'

const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <footer className='bg-gray-900 text-white flex justify-center px-4 h-16 items-center'>
      <p className='text-center'>Get-Me-A-Chai - &copy;{currentyear} All Rights Reversed</p>
    </footer>
  )
}

export default Footer
