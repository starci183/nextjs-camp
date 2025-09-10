"use client"
import React from "react"   
//import { useAppDispatch, setCarrot } from "./redux"
import { getDateString } from "@/modules"
import { RefreshPikachuButton } from "./RefreshPikachuButton"
import { RenderPikachu } from "./RenderPikachu"

export default function Home() {
    return (
        <div>
            <RefreshPikachuButton />
            <RenderPikachu />
            {getDateString()}
        </div>
    )
}
