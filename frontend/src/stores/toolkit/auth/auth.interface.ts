export interface IUser {
    _id?: string
    fullName: string
    email: string
    password: string
    role: string
}

export interface IUserState {
    user: IUser
}