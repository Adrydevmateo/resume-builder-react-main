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
    SetToken: (token: string) => void
    SeTUserPermissions: (permissions: TUserPermissions) => void
    SignUp: (email: string, password: string) => Promise<IUserSignUpResponse>
}

export interface IUserStore extends IUserFields, IUserActions {
    permissions: TUserPermissions
}

export interface IUserRequestError {
    error: {
        state: boolean,
        msg: string
    }
}

export interface IUserRequestResponse {
    id: string
    email: string
    token: string
}

export interface IUserSignUpResponse extends IUserRequestError {
    data: {
        id: string
        email: string
        token: string
    }
}