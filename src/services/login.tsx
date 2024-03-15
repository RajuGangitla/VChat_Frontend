import { BACKENDAPIS } from "@/api/routes";
import api from "@/lib/api"
import { TUser } from "@/types/user";
import { useMutation, useQuery } from "@tanstack/react-query"
import { NextRouter } from "next/router";



export const googleLoginApi = () => {
    return useMutation({
        mutationFn: () => api.get('auth/google'),
        onSuccess: (data: any) => {
        },
        onError: () => {
        },
    })
};


export const getUserApi = (router: any, setUser: (data: TUser) => void) => {
    async function getUser() {
        try {
            const resp = await api.get(`${BACKENDAPIS.GET_USER_BYID}`)
            setUser({
                userId: resp?.data?._id,
                email: resp?.data?.email,
                firstName: resp?.data?.firstName,
                lastName: resp?.data?.lastName,
                profilePicture: resp?.data?.profilePicture
            })
            return resp.data
        } catch (error) {
            router.push('/login')
        }
    }
    return useQuery({
        queryKey: ['getUser'],
        queryFn: getUser,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        retry: 1
    }
    )
}