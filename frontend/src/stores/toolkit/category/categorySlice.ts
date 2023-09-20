import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ICategory, ICategoryState } from "./category.interface"
export const initialCategory: ICategoryState = {
    categories: []
}
const categorySlice = createSlice({
    name: "categories",
    initialState: initialCategory,
    reducers: ({
        listCategorySlice: (state: ICategoryState, actions: PayloadAction<ICategory[]>) => {
            state.categories = actions.payload
        },
        deleteCategorySlice: (state: ICategoryState, actions: PayloadAction<String>) => {
            state.categories = state.categories.filter(cate => cate._id != actions.payload)
        },
    })
})

export const { listCategorySlice, deleteCategorySlice } = categorySlice.actions
export default categorySlice.reducer