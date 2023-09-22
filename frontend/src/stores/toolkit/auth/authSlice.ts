import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser, IUserState } from "./auth.interface"

const initTialUser: IUserState = {
    user: {} as IUser
}
const authSlice = createSlice({
    name: "auth",
    initialState: initTialUser,
    reducers: ({
        fetchUserSlice: (state: IUserState, action: PayloadAction<IUser>) => {
            state.user = action.payload
        }
    })
})

export const { fetchUserSlice } = authSlice.actions
export default authSlice.reducer