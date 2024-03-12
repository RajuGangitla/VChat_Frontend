import api from "@/lib/api"
import { useMutation } from "@tanstack/react-query"



export const googleLoginApi = () => {
    return useMutation({
        mutationFn: () => api.get('auth/google'),
        onSuccess: (data:any) => {
            
        },
        onError:()=>{
            
        },
    })
};