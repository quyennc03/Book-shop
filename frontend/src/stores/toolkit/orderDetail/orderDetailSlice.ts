import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IOrderDetail, IOrderDetailState } from "./orderDetail.interface"

export const initialOrderDetailState: IOrderDetailState = {
    orderDetails: []
}

const orderDetailSlice = createSlice({
    name: "orderDetails",
    initialState: initialOrderDetailState,
    reducers: ({
        fetchListOrderDetailSlice: (state: IOrderDetailState, action: PayloadAction<IOrderDetail[]>) => {
            state.orderDetails = action.payload
        },
        fetchListProductHot: (state: IOrderDetailState, action: PayloadAction<IOrderDetail[]>) => {
            state.orderDetails = action.payload
        },
    })
})

export const { fetchListOrderDetailSlice } = orderDetailSlice.actions

export default orderDetailSlice.reducer