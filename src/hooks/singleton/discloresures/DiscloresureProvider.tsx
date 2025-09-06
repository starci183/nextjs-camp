import { createContext, PropsWithChildren } from "react"
import React from "react"
import { useSignUpDiscloresureCore } from "./useSignUpDiscloresure"
import { useLoginDiscloresureCore } from "./useLoginDiscloresure"

export interface DiscloresureContextType {
    useSignUpDiscloresure: ReturnType<typeof useSignUpDiscloresureCore>
    useLoginDiscloresure: ReturnType<typeof useLoginDiscloresureCore>
}

export const DiscloresureContext = createContext<DiscloresureContextType | null>(null)

export const DiscloresureProvider = ({ children }: PropsWithChildren) => {
    const useSignUpDiscloresure = useSignUpDiscloresureCore()
    const useLoginDiscloresure = useLoginDiscloresureCore()
    return (
        <DiscloresureContext.Provider value={{
            useLoginDiscloresure,
            useSignUpDiscloresure
        }}>
            {children}
        </DiscloresureContext.Provider>
    )
}