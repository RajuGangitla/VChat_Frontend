"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { googleLoginApi } from "@/services/login"





export default function Login() {

    const { mutate: googleLogin, isPending } = googleLoginApi()


    return (
        <>
            {/* Container */}
            <div className=" min-h-screen flex items-center justify-center ">
                <Card className="flex flex-col m-6 space-y-10 shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">

                    {/* Left Right */}
                    <img src="./loginbg.png" className="w-[430px] hidden md:block cursor-pointer rounded-lg duration-200 hover:scale-95" alt="" />

                    {/* Right Part */}
                    <div className="p-6 md:p-20">
                        <p className="text-center font-semibold tracking-wide text-3xl max-w-5xl my-6">Welcome Back to V-Chat</p>
                        <p className="mx-auto text-center font-normal text-xl max-w-sm my-12">Login to enjoy chatting and connecting with others</p>
                        

                        <form action="http://localhost:8000/api/auth/google" method="get">
                            <Button variant="default" type="submit" className="w-full bg-black text-white text-base hover:bg-opacity-80 duration-200">
                                <svg role="img" viewBox="0 0 24 24" className="mr-4 h-6 w-6">
                                    <path
                                        fill="currentColor"
                                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                    />
                                </svg>
                                Continue with Google

                            </Button>
                        </form>
                    </div>

                </Card>
            </div>
        </>
    )
}