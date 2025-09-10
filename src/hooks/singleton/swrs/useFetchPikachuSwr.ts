import { cache, useContext } from "react"
import { SwrContext } from "./SwrProvider"
import axios from "axios"
import useSWR from "swr"

// logic chính của  hook
export const useFetchPikachuSwrCore = ()=>{
    const swr = useSWR("PIKACHU", () => {
        return axios.get("https://pokeapi.co/api/v2/pokemon/ditto", {
            headers: {
                "cache-control": "no-cache"
            }
        })
    })
    return swr
}

// đây là hooks
// bản chất là cái hook này nó trỏ về 1 hook trong context mà thôi
// dù em có xài hook này ở bất kì component nào nó đều trả về 1 thứ - singleton
export const useFetchPikachuSwrSingleton = () => {
    // nó truy cập vào dữ liệu trong context
    const { useFetchPikachuSwr } = useContext(SwrContext)!
    // trả về cái hook trong context
    return useFetchPikachuSwr
}