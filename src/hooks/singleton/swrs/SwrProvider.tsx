import { createContext, PropsWithChildren } from "react"
import React from "react"
import { useFetchPikachuSwrCore } from "./useFetchPikachuSwr"

export interface SwrContextType {
    useFetchPikachuSwr: ReturnType<typeof useFetchPikachuSwrCore>
}

export const SwrContext = createContext<SwrContextType | null>(null)

export const SwrProvider = ({ children }: PropsWithChildren) => {
    const useFetchPikachuSwr = useFetchPikachuSwrCore()
    return (
        <SwrContext.Provider value={{
            useFetchPikachuSwr,
        }}>
            {children}
        </SwrContext.Provider>
    )
}