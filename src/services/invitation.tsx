import { BACKENDAPIS } from "@/routes/routes"
import { toast } from "@/components/ui/use-toast"
import api from "@/lib/api"
import { TInvitation } from "@/types/invitation"
import { Tag } from "@/types/reusable"
import { useMutation } from "@tanstack/react-query"
import React from "react"




export const inviteFriendsApi = (setOpen: React.Dispatch<React.SetStateAction<boolean>>, reset: any) => {
    return useMutation({
        mutationFn: (data: TInvitation) => {
            return api.post(`${BACKENDAPIS.INVITE_FRIENDS}`, data)
        },
        onSuccess: (data: any) => {
            toast({
                title: "Invitation sent successfully"
            })
            reset()
            setOpen(false)
        },
        onError: (error: any) => {
            toast({
                title: error.response.data.message,
                variant: "destructive"
            })
        },
    })
}