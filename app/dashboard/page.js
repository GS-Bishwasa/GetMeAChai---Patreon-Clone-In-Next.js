"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()
  if(!session) {
   router.push("/login")
  }
  return (
    <div>dashboard</div>
  )
}

export default dashboard