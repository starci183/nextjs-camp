import { useDisclosure } from "@heroui/react"
import { useContext } from "react"
import { DiscloresureContext } from "./DiscloresureProvider"

// logic chính của  hook
export const useLoginDiscloresureCore = ()=>{
    return useDisclosure()
}

// đây là hooks
// bản chất là cái hook này nó trỏ về 1 hook trong context mà thôi
// dù em có xài hook này ở bất kì component nào nó đều trả về 1 thứ - singleton
export const useLoginDiscloresureSingleton = () => {
    // nó truy cập vào dữ liệu trong context
    const { useLoginDiscloresure } = useContext(DiscloresureContext)!
    // trả về cái hook trong context
    return useLoginDiscloresure
}