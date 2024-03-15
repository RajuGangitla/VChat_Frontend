import { TUser } from '@/types/user'
import { create } from 'zustand'



interface IAuthStore {
    user: TUser
    setUser: (data: TUser) => void
    loggedIn: boolean
}


const useAuthStore = create<IAuthStore>()((set) => ({
    user: {
        firstName: "",
        lastName: "",
        email: "",
        profilePicture: "",
        userId: ""
    },
    loggedIn: false,
    setUser: (user) => set((state) => ({ ...state, user, loggedIn: true }))
}))


export default useAuthStore