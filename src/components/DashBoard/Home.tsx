"use client"

import useAuthStore from "@/store/authStore"

export default function DashBoard() {

    const user = useAuthStore((state) => state.user)

    return (
        <>
            <p>{user?.firstName + " " + user?.lastName}</p>

        </>
    )
}