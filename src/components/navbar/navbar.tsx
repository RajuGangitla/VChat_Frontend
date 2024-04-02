"use client"

import useAuthStore from "@/store/authStore"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { ModeToggle } from "./toggle"
import InviteFriend from "../invitation/invite"


export default function NavBar() {

    const user = useAuthStore((state) => state.user)

    return (
        <>
            <div className="w-full flex items-center justify-between shadow-md border-b py-4 px-4 md:px-24">
                <div className="">
                    <Image src={"/logo.jpg"} alt={"logo"} width={40} height={40} />
                </div>
                <div className="flex items-center space-x-4">
                    <ModeToggle />
                    <InviteFriend />
                    <div className="flex items-center space-x-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src={user?.profilePicture} />
                            <AvatarFallback>{user?.firstName?.slice(0, 1)}</AvatarFallback>
                        </Avatar>
                        <p className="font-medium">{user?.firstName} {user?.lastName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}