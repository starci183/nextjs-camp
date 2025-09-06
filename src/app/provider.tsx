"use client"
import { DiscloresureProvider } from "@/hooks"
// nextjs client side component
// server side component
// giai thich sau, phai hieu ve rendering
import {HeroUIProvider} from "@heroui/react"
import React from "react"
export function Providers({children}: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            <DiscloresureProvider>
                {children}
            </DiscloresureProvider>
        </HeroUIProvider>
    )
}