import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ICart, ICartState } from "./cart.interface"

export const initalCartState: ICartState = {
    carts: []
}

const cartSlice = createSlice({
    name: "carts",
    initialState: initalCartState,
    reducers: ({
        listCartSlice: (state: ICartState, action: PayloadAction<ICart[]>) => {
            state.carts = action.payload
        },
    })
})

export const { listCartSlice } = cartSlice.actions

export default cartSlice.reducer