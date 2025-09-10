"use client"
import React from "react"
import { LoginModal } from "./LoginModal"
import { SignUpModal } from "./SignUpModal"

// modals la 1 components, gom toan bo component cua web vao day
export const Modals = () => {
    return (
        <>
            <LoginModal/>
            <SignUpModal/>
        </>
    )
}