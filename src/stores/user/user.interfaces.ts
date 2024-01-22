import { TUserPermissions } from "./user.types"

export interface IUserFields {
    id: string
    name: string
    email: string
}

export interface IUserActions {
    SetId: (id: string) => void
    SetName: (name: string) => void
    SetEmail: (email: string) => void
    SeTUserPermissions: (permissions: TUserPermissions) => void
}

export interface IUserStore extends IUserFields, IUserActions {
    permissions: TUserPermissions
}