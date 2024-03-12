'use client'

// import { UserProvider } from '@/context/userProvider'
import { ReactNode } from 'react'
import { UserProvider } from '../context/userProvider.tsx'
import React from 'react'

export default function Provider({ children }: { children: ReactNode }) {
  return <UserProvider>{children}</UserProvider>
}
