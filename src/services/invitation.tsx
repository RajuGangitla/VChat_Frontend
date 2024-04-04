import { BACKENDAPIS } from "@/api/routes"
import { toast } from "@/components/ui/use-toast"
import api from "@/lib/api"
import { TInvitation } from "@/types/invitation"
import { Tag } from "@/types/reusable"
import { useMutation } from "@tanstack/react-query"
import React from "react"




export const inviteFriendsApi = (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    return useMutation({
        mutationFn: (data: TInvitation) => {
            return api.post(`${BACKENDAPIS.INVITE_FRIENDS}`, data)
        },
        onSuccess: (data: any) => {
            toast({
                title: "Invitation sent successfully"
            })
            setOpen(false)
        },
        onError: (error: Error) => {
            toast({
                title: error.message
            })
        },
    })
}