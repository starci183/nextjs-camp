import { useDisclosure } from "@heroui/react"
import { useContext } from "react"
import { DiscloresureContext } from "./DiscloresureProvider"

export const useSignUpDiscloresureCore = ()=>{
    return useDisclosure()
}

export const useSignUpDiscloresureSingleton = () => {
    const { useSignUpDiscloresure } = useContext(DiscloresureContext)!
    return useSignUpDiscloresure
}