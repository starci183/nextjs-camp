"use client"
import { DiscloresureProvider, SwrProvider } from "@/hooks"
// nextjs client side component
// server side component
// giai thich sau, phai hieu ve rendering
import {HeroUIProvider} from "@heroui/react"
import React from "react"
export function Providers({children}: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            <DiscloresureProvider>
                <SwrProvider>
                    {children}
                </SwrProvider>
            </DiscloresureProvider>
        </HeroUIProvider>
    )
}