"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()

  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }

  
  return (
    <>
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
      <Link href={"/login"}>
           <button type="button" className="text-white transition bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Login</button></Link>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
