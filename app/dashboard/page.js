"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Dashboard from '@/components/Dashboard'
import { useEffect } from 'react'

const dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
    // console.log(session)
    if (!session) {
        router.push('/login')
    }
}, [])
  return (
    <Dashboard/>
  )
}

export default dashboard