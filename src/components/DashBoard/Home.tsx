"use client"

import { getUserApi } from "@/services/login"
import useAuthStore from "@/store/authStore"
import { useRouter } from "next/navigation"


export default function DashBoard() {

    const router = useRouter()
    const { setUser } = useAuthStore()
    const user = useAuthStore((state) => state.user)
    const { data: getUser, isLoading } = getUserApi(router, setUser)

    return (
        <>
            <p>{user?.firstName + " " + user?.lastName}</p>
            
        </>
    )
}