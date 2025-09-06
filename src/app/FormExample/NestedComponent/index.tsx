import { useLoginDiscloresureSingleton } from "@/hooks"
import { Button, Input } from "@heroui/react"
import React, { useState } from "react"

export const NestedComponent = () => {
    const { onOpen } = useLoginDiscloresureSingleton()  
    // ux nâng cao,
    const [value, setValue] = useState("")
    return (
        // singleton hooks, ux nâng cao
        // vì tất cả components nó có thể truy cập vào cùng 1 hooks
        <Input label="Username" value={value} onValueChange={(value) => {
            if (value === "Cuong") {
                onOpen()
            }
            setValue(value)}
        }
        />
    )
}