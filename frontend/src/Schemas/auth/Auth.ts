import * as yup from "yup"

export const signupSchema = yup.object({
    fullName: yup.string().min(1).trim("Tên không được để trống").required("Name bắt buộc nhập"),
    email: yup.string().email("Email không đúng định dạng").required("Email không được để trống"),
    password: yup.string().min(6).required("Password bắt buộc nhập"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Mật khẩu không khớp")
})
export const signinSchema = yup.object({
    email: yup.string().email("Email không đúng định dạng").required("Email không được để trống"),
    password: yup.string().min(6).required("Password bắt buộc nhập"),
})

export type signupForm = yup.InferType<typeof signupSchema>
export type signinForm = yup.InferType<typeof signinSchema>
