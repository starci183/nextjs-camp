import { Button, ButtonProps } from "@heroui/react"
import { cva } from "class-variance-authority"
import React from "react"

// cn và cva
export const buttonKinds = cva(
    "px-4 py-2 rounded-md font-medium transition-colors",
    {
        variants: {
            kind: {
                cuong: "bg-red-500 text-white hover:bg-red-600",
                default: "bg-gray-200 text-black hover:bg-gray-300",
                rainbow:
            "bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 text-white hover:opacity-90",
            },
        },
        defaultVariants: {
            kind: "default",
        },
    }
)

export interface AppButtonProps extends ButtonProps {
    kind?: "default" | "rainbow" | "cuong"
}

export const AppButton = (props: AppButtonProps) => {
    return <Button {...props} className={buttonKinds({ kind: props.kind })}/>
}