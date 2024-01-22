import { create } from "zustand"
import { IUserStore } from "./user.interfaces"
import { TUserPermissions } from "./user.types"

export const useUserStore = create<IUserStore>((set) => ({
    id: "",
    name: "",
    email: "",
    permissions: "common",
    SetId: (id: string) => set(state => ({ ...state, id })),
    SetName: (name: string) => set(state => ({ ...state, name })),
    SetEmail: (email: string) => set(state => ({ ...state, email })),
    SeTUserPermissions: (permissions: TUserPermissions) => set(state => ({ ...state, permissions })),
}))