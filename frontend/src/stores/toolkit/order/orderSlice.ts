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
        listOrderById: (state: IOrderState, action: PayloadAction<IOrder[]>) => {
            const userStore = JSON.parse(localStorage.getItem("user")!)
            state.orders = action.payload.filter((order) => order.userId === userStore)
        },
        getOneOrderSlice: (state, action: PayloadAction<IOrder>) => {
            state.orders = state.orders.filter((order) => order._id == action.payload._id)
        }
    })
})

export const { listOrderSlice, listOrderById, getOneOrderSlice } = orderSlice.actions
export default orderSlice.reducer