import { create } from "zustand"
import type { IUserRequestResponse, IUserSignUpResponse, IUserStore } from "./user.interfaces"
import type { TUserPermissions } from "./user.types"

export const useUserStore = create<IUserStore>((set) => ({
    id: "",
    name: "",
    email: "",
    permissions: "common",
    SetId: (id: string) => set(state => ({ ...state, id })),
    SetName: (name: string) => set(state => ({ ...state, name })),
    SetEmail: (email: string) => set(state => ({ ...state, email })),
    SetToken: (token: string) => set(state => {
        localStorage['user_token'] = token
        return { ...state }
    }),
    SeTUserPermissions: (permissions: TUserPermissions) => set(state => ({ ...state, permissions })),
    //#region Backend Requests
    async SignUp(email, password): Promise<IUserSignUpResponse> {
        const result: IUserSignUpResponse = {
            error: {
                state: false,
                msg: ''
            },
            data: {
                id: '',
                email: '',
                token: ''
            }
        }
        if (!email) {
            result.error.state = true
            result.error.msg = 'No email was provided'
            return result
        } else if (!password) {
            result.error.state = true
            result.error.msg = 'No password was provided'
            return result
        }

        try {
            const uri = import.meta.env.VITE_SIGN_UP_URI
            const response = await fetch(uri, {
                method: 'POST',
                headers: {},
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            })

            if (!response.ok) {
                result.error.state = true
                result.error.msg = `Server responded: ${response.status} with message: ${response.statusText}`
                return result
            }

            const json: IUserRequestResponse = await response.json()
            result.data.id = json.id
            result.data.email = json.email
            result.data.token = json.token

        } catch (error: any) {
            result.error.state = true
            result.error.msg = error.message
        } finally {
            return result
        }
    },
    //#endregion Backend Requests
}))