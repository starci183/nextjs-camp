"use client"
import React from "react"
import {Calendar} from "@heroui/calendar"
import {InputOtp} from "@heroui/input-otp"
import Cuong from "./autocomple"
import { MyButton, MyCalendar } from "./components/styled/MyButton"
import { Button } from "@heroui/react"
import { useAppSelector, useAppDispatch, setCarrot } from "./redux"
import { p } from "framer-motion/client"

export default function Home() {
    const carrot = useAppSelector(state => state.plant.carrot)
    const potato = useAppSelector(state => state.plant.potato)
    const dispatch = useAppDispatch()
    return (
        <div>
            Carrot: {carrot}
            Cu khoai: {potato}
            <Button onPress={() => dispatch(setCarrot(carrot + 1))}>
              Tang ca rot len 1
            </Button>
        </div>
    )
}
