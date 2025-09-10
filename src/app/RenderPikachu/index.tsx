import { useFetchPikachuSwrSingleton } from "@/hooks"
import React from "react"
import { Spinner } from "@heroui/react"

export const RenderPikachu = () => {
    const { data, isValidating } = useFetchPikachuSwrSingleton()
    return <div>{isValidating ? <Spinner/> : <p>{JSON.stringify(data)}</p>}</div>
}