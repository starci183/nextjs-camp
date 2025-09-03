"use client"
import { Button, Spinner } from "@heroui/react"
import axios from "axios"
import React from "react"
import useSWR from "swr"

export const Children4 = () => {
    const swr = useSWR(
        "PIKACHU",
        async() => {
            const response = await 
            axios.get("https://pokeapi.co/api/v2/pokemon/ditto", {
                headers: {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0",
                }
            })
            return response.data
        }
    )
    return (
        <div>
            <Button onPress={() => swr.mutate()}>Call API Again</Button>
            {
                swr.isValidating ?
                    <Spinner/>
                    :
                    <div>{JSON.stringify(swr.data)}</div>
            }
            {swr.error}
            
            
        </div>
    )
}