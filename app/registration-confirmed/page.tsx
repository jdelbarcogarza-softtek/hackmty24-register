"use client"
import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'

const page = () => {
  return (
    <div>Registration confirmed. Good luck!!</div>
  )
}

export default ProtectedRoute(page)