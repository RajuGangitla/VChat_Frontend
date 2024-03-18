"use client"

import { ILayout } from "@/types/layout";
import { usePathname } from "next/navigation";
import NavBar from "../navbar/navbar";
import QueryProvider from "@/providers/queryprovider";
import { Toaster } from "@/components/ui/toaster"



export default function MainLayout({ children }: ILayout) {

    const pathname = usePathname()

    return (
        <>
            <QueryProvider>
                <div className="min-h-full">
                    {
                        pathname !== "/login" && <NavBar />
                    }
                    <Toaster />
                    {children}
                </div>
            </QueryProvider>
        </>
    )
}