'use client'
// nextjs client side component
// server side component
// giai thich sau, phai hieu ve rendering
import {HeroUIProvider} from '@heroui/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}