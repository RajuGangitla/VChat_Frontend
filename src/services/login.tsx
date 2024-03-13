import api from "@/lib/api"
import { useMutation, useQuery } from "@tanstack/react-query"



export const googleLoginApi = () => {
    return useMutation({
        mutationFn: () => api.get('auth/google'),
        onSuccess: (data: any) => {
        },
        onError: () => {
        },
    })
};


export const getUserApi = () => {
    return useQuery({
        queryKey: ['getUser'],
        queryFn: async () => await api.get("users/getUserById"),
        refetchOnMount:true,
        refetchOnWindowFocus:false
    })
}