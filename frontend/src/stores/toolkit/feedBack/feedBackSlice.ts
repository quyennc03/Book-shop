import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IFeedBack, IFeedBackState } from "./feedBack.interface"
import { feedBackForm } from "../../../Schemas/feedBack/feedback"

export const initialOrderDetailState: IFeedBackState = {
    feedBacks: []
}

const feedBackSlice = createSlice({
    name: "feedBacks",
    initialState: initialOrderDetailState,
    reducers: ({
        fetchListFeedBackSlice: (state: IFeedBackState, action: PayloadAction<IFeedBack[]>) => {
            state.feedBacks = action.payload

        },
        addFeedBackSlice: (state: IFeedBackState, action: PayloadAction<feedBackForm>) => {
            state.feedBacks.push(action.payload)
        },
    })
})

export const { fetchListFeedBackSlice, addFeedBackSlice } = feedBackSlice.actions

export default feedBackSlice.reducer