"use client"

import { ILayout } from "@/types/layout";
import { usePathname, useRouter } from "next/navigation";
import NavBar from "../navbar/navbar";
import { Toaster } from "@/components/ui/toaster"
import useAuthStore from "@/store/authStore";
import { useEffect } from "react";
import api from "@/lib/api";
import { BACKENDAPIS } from "@/routes/routes";



export default function MainLayout({ children }: ILayout) {

    const pathname = usePathname()
    const router = useRouter()
    const { setUser } = useAuthStore()

    useEffect(() => {
        if ((pathname !== "login" && pathname !== "invitation")) {
            api.get(`${BACKENDAPIS.GET_USER_BYID}`).then((res) => {
                setUser({
                    userId: res?.data?._id,
                    email: res?.data?.email,
                    firstName: res?.data?.firstName,
                    lastName: res?.data?.lastName,
                    profilePicture: res?.data?.profilePicture
                })
            }).catch((e) => {
                router.push("/login")
            })
        }

    }, [pathname])


    return (
        <>
            <div className="min-h-full">
                {
                    pathname !== "/login" && <NavBar />
                }
                <Toaster />
                {children}
            </div>
        </>
    )
}