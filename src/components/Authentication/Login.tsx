"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"





export default function Login() {

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
                                <Image src={"/google.png"} alt={"google"} className="mr-2" width={30} height={30} />
                                Continue with Google

                            </Button>
                        </form>
                    </div>

                </Card>
            </div>
        </>
    )
}