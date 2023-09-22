import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { signinForm, signinSchema, signupForm, signupSchema } from '../../Schemas/auth/Auth'
import { yupResolver } from '@hookform/resolvers/yup'
import { useGetListUserQuery, useSigninMutation, useSingupMutation } from '../../stores/toolkit/auth/auth.service'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
    const navigate = useNavigate()
    const [onAdd] = useSingupMutation()
    const [onAddSignin] = useSigninMutation()
    const { data: listUser } = useGetListUserQuery()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<signupForm>({
        resolver: yupResolver(signupSchema)
    })
    const {
        register: registerSignin,
        handleSubmit: handleSubmitSignin,
        formState: { errors: errorSingin }
    } = useForm<signinForm>({
        resolver: yupResolver(signinSchema)
    })
    const [user, setUser] = useLocalStorage("user", null);
    const onSignin = async (users: signinForm) => {
        try {
            const errorEmail = listUser?.find((userItem) => userItem.email == users.email)
            if (!errorEmail) {
                alert("Tai khoan hoac mat khau khong chinh xac")
            } else {
                const { data } = await onAddSignin(users)
                const { accessToken, user } = data
                setUser({ accessToken, ...user })
                navigate("/")
            }
        } catch (error) {
            console.log(error);
        }
    }
    const onSignup = async (user: signupForm) => {
        try {
            await onAdd(user)
            alert("Đăng kí thành công!")
            const formSignup = document.querySelector(".formSignup");
            const formSignin = document.querySelector(".formSignin")
            const buttonSignup = document.querySelector(".buttonSignup")
            const buttonSignin = document.querySelector(".buttonSignin")
            formSignin?.classList.remove("hidden")
            formSignup?.classList.add("hidden")
            buttonSignup?.classList.remove("border-b-2")
            buttonSignin?.classList.add("border-b-2")
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const formSignup = document.querySelector(".formSignup");
        const formSignin = document.querySelector(".formSignin")
        const buttonSignup = document.querySelector(".buttonSignup")
        const buttonSignin = document.querySelector(".buttonSignin")
        buttonSignup?.addEventListener("click", () => {
            formSignup?.classList.remove("hidden")
            formSignin?.classList.add("hidden")
            buttonSignin?.classList.remove("border-b-2")
            buttonSignup.classList.add("border-b-2")
        })
        buttonSignin?.addEventListener("click", () => {
            formSignin?.classList.remove("hidden")
            formSignup?.classList.add("hidden")
            buttonSignup?.classList.remove("border-b-2")
            buttonSignin.classList.add("border-b-2")
        })
    }, [])
    return (
        <div className='container'>
            <section className="bg-gray-50 dark:bg-gray-900 mt-3">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:my-4 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div className="text-[14px] grid grid-cols-2 w-full md:mt-0 sm:max-w-md xl:p-0  mt-2">
                                <button type='button' className='text-center py-2 cursor-pointer border-b-2 border-red-500 buttonSignin'>Đăng nhập</button>
                                <button type='button' className='text-center py-2 cursor-pointer buttonSignup border-red-500' >Đăng kí</button>
                            </div>
                            {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Đăng nhập
                            </h1> */}
                            <form onSubmit={handleSubmitSignin(onSignin)} className="space-y-4 md:space-y-6 formSignin" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input {...registerSignin("email")} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhap email ..." />
                                    <p className='text-red-600 italic'>{errorSingin ? errorSingin.email?.message : ""}</p>

                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input {...registerSignin("password")} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <p className='text-red-600 italic'>{errorSingin ? errorSingin.password?.message : ""}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    {/* <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div> */}
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white font-bold bg-main hover:bg-main-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            </form>
                            <form onSubmit={handleSubmit(onSignup)} className="space-y-4 md:space-y-6 hidden formSignup" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input {...register("fullName")} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tên của bạn" />
                                    <p className='text-red-600 italic'>{errors ? errors.fullName?.message : ""}</p>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input {...register("email")} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                </div>
                                <p className='text-red-600 italic'>{errors ? errors.email?.message : ""}</p>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input  {...register("password")} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <p className='text-red-600 italic'>{errors ? errors.password?.message : ""}</p>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                    <input {...register("confirmPassword")} type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <p className='text-red-600 italic'>{errors ? errors.confirmPassword?.message : ""}</p>
                                <button type='submit' className="w-full text-white bg-main font-bold  hover:bg-main-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signin
