import { Button } from "@heroui/react"
import { useFetchPikachuSwrSingleton } from "@/hooks"
import React from "react"

export const RefreshPikachuButton = () => {
    const { mutate } = useFetchPikachuSwrSingleton()
    return <Button onPress={() => mutate()}>Refresh Pikachu</Button>
}