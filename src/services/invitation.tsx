import { BACKENDAPIS } from "@/api/routes"
import { toast } from "@/components/ui/use-toast"
import api from "@/lib/api"
import { TInvitation } from "@/types/invitation"
import { useMutation } from "@tanstack/react-query"




export const inviteFriendsApi  = ()=>{
    return useMutation({
        mutationFn: (data:TInvitation)=>{
            return api.post(`${BACKENDAPIS.INVITE_FRIENDS}`, data)
        },
        onSuccess: (data: any) => {
            toast({
                title:"Invitation sent successfully"
            })
        },
        onError: (error: Error) => {
            toast({
                title: error.message
            })
        },
    })
}