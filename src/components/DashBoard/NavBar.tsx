"use client"

import useAuthStore from "@/store/authStore"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function NavBar() {
    const user = useAuthStore((state) => state.user)
    return (
        <>
            <div className="w-full flex items-center justify-between shadow-md border-b py-4 px-4 md:px-24">
                <div className="">

                </div>
                <div className="">
                    <div className="flex items-center space-x-2">
                        <Avatar>
                            <AvatarImage src={user?.profilePicture} />
                            <AvatarFallback>{user.firstName.slice(0,2)}</AvatarFallback>
                        </Avatar>
                        <p>{user?.firstName} {user?.lastName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}