import React from "react"
import { AppButton } from "../styled"

// em sẽ viết những components bằng cách ghép các components của bên styled lại
// styled tức là cục gạch, modules nó sẽ bức ghép (ghép gạch lại thành tường)
export interface ButtonGroupProps {
    numButtons?: number
    onButtonClick?: (index: number) => void
}
export const ButtonGroup = ({
    numButtons = 5,
    onButtonClick
}: ButtonGroupProps) => {
    return (
        <div className="flex gap-4">
            {Array.from({length: numButtons}, (_, index) => (
                <AppButton key={index} onPress={() => onButtonClick?.(index)}>
                    Button {index + 1}
                </AppButton>
            ))}
        </div>
    )
}