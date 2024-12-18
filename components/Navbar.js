"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const Navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false)
  const { data: session } = useSession()
  const router = useRouter()


  // if (session) {
  //   return <>
  //     Signed in as {session.user.email} <br />
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // } 


  return (
    <>
      <nav className='bg-gray-900 text-white flex justify-between px-4 h-16 items-center'>
        <Link href={"/"}>
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
            GetMeAChai</div></Link>
        <ul className='flex justify-between gap-3'>
          {session && <div className='relative'><button onBlur={() => {
            // setTimeout(() => {
            //   setshowdropdown(false)
            // }, 100);
          }} onClick={() => { setshowdropdown(!showdropdown) }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>


            <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute top-[65px] left-[110px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  {session && <Link href={"/dashboard"}>
                    <button type="button" className="w-[100%] block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >Dashboard</button></Link>}
                </li>
                <li>
                  <Link href={`/${session.user.name}`} className="text-center w-[100%] block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                </li>
                {/* <li>
        <a href="#" className="w-[100%] block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li> */}
                <li>
                  {session && <button onClick={() => { signOut() }} type="button" className="w-[100%] block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >Logout</button>}
                </li>
              </ul>
            </div>
          </div>
          }
          {!session && <Link href={"/login"}>
            <button type="button" className="text-white transition bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Login</button></Link>}

        </ul>
      </nav>
    </>
  )
}

export default Navbar
