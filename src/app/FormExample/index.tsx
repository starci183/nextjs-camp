"use client"
import { Button, Input, Link } from "@heroui/react"
import React, { useState } from "react"
import { EyeIcon } from "@phosphor-icons/react"
import { useFormik } from "formik"
import * as Yup from "yup"
import App from "../../components/modals/LoginModal"
import { useLoginDiscloresureSingleton } from "@/hooks"
import { NestedComponent } from "./NestedComponent"

export const FormExample = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Username is required")
                .min(4, "Username must be at least 4 characters")
                .max(10, "Username must be at most 10 characters")
            ,
            password: Yup.string()
                .required("Password is required")
                .min(6, "Password must be at least 6 characters"),
            // validate confirm password dựa vào password
            // điểm cộng của formik là nó có thể validate dựa vào nhiều field
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], "Passwords must match")
                .required("Please confirm your password"),
        }),
        onSubmit: async (values) => {
            // Promise tự nghiên cứu
            // nó ngủ trong vòng 4s, sau 4s mới thực thi logic
            await new Promise(resolve => setTimeout(resolve, 4000))
            // logic thực thi
            alert(JSON.stringify(values))
        },
    })

    const { onOpen } = useLoginDiscloresureSingleton()

    return (
        <div className="flex flex-col gap-4">
            <Button onPress={() => onOpen()}>Login</Button>
            <NestedComponent/>

            <Input label="Username" value={formik.values.username}
                onValueChange={(value) => formik.setFieldValue(
                    "username",
                    value
                )}
                // !! tức là nó trả về true nếu giá trị là trusy - khác null, khác chuỗi rỗng, ...
                // !1 trả về false nếu là chuỗi rỗng, nếu là null,....
                isInvalid={                                                !!(
                    formik.touched.username &&
                    formik.errors.username
                )
                }
                errorMessage={formik.errors.username}
                onBlur={() => {
                    formik.setFieldTouched("username")
                }}
            />
            <Input
                label="Password"
                type={isShowPassword ? "text" : "password"}
                value={formik.values.password}
                onValueChange={(value) => formik.setFieldValue(
                    "password",
                    value
                )}
                isInvalid={!!(formik.touched.password && formik.errors.password)}
                errorMessage={formik.errors.password}
                onBlur={() => {
                    formik.setFieldTouched("password")
                }}
                endContent={
                    <Link onPress={() => setIsShowPassword(!isShowPassword)}>
                        <EyeIcon  />
                    </Link>
                }
            />
            <Input label="Confirm" type="password"
                value={formik.values.confirmPassword}
                onValueChange={(value) => formik.setFieldValue(
                    "confirmPassword",
                    value
                )}
                errorMessage={formik.errors.confirmPassword}
                onBlur={() => {
                    formik.setFieldTouched("confirmPassword")
                }}
                isInvalid={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
            />
            <Button isLoading={formik.isSubmitting} color="primary" isDisabled={!formik.isValid} onPress={() => formik.submitForm()}>Send Form</Button>
            <App/>
        </div>
    )
}
