import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IOrder, IOrderState } from "./order.interface"

export const initalOrderState: IOrderState = {
    orders: []
}
const orderSlice = createSlice({
    name: "orders",
    initialState: initalOrderState,
    reducers: ({
        listOrderSlice: (state: IOrderState, action: PayloadAction<IOrder[]>) => {
            state.orders = action.payload
        },
    })
})

export const { listOrderSlice } = orderSlice.actions
export default orderSlice.reducer