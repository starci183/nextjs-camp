"use client"
import React from "react"   
import { FormExample } from "./FormExample"
import LoginModal from "./LoginModal"
import SignUpModal from "./SignUpModal"
//import { useAppDispatch, setCarrot } from "./redux"

export default function Home() {
    return (
        <div>
            <FormExample/>
            
            <div>
                <LoginModal/>
                <SignUpModal/>
            </div>
        </div>
    )
}
