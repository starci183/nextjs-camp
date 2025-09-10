import { Switch } from "@heroui/react"
import { useTheme } from "next-themes"
import React from "react"
import { MoonIcon, SunIcon } from "@phosphor-icons/react"

export const SwitchTheme = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div>
            <Switch
                size="lg"
                color="default"
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <MoonIcon weight="fill" className={className} />
                    ) : (
                        <SunIcon weight="fill" className={className} />
                    )
                }
                isSelected={theme === "dark"}
                onValueChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
        </div>
    )
}