import { Card, CardProps, CardBody, CardHeader, CardFooter, HTMLHeroUIProps, cn } from "@heroui/react"
import React from "react"

export interface AppCardProps extends CardProps {
    flag?: boolean
}

export const AppCard = (props: AppCardProps) => {
    return <Card {...props} className={
        cn(
            props.className, 
            {
                "bg-gray-200": props.flag,
                "bg-gray-500": !props.flag
            },
            {
                "text-red-200": props.flag,
                "text-blue-500": !props.flag
            }
        )}/>
}

export const AppCardBody = (props: HTMLHeroUIProps<"div">) => {
    return <CardBody {...props}/>
}

export const AppCardFooter = (props: HTMLHeroUIProps<"div">) => {
    return <CardFooter {...props}/>
}

export const AppCardHeader = (props: HTMLHeroUIProps<"div">) => {
    return <CardHeader {...props}/>
}