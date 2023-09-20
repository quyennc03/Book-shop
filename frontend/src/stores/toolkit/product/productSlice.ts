import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct, IProductCategory, IProductState } from "./product.interface"
const initialProduct: IProductState = {
    products: []
}
const initialProductCategory: IProductCategory = {
    products: [],
    categoryTerm: ""
}
const productSlice = createSlice({
    name: "products",
    initialState: initialProduct,
    reducers: ({
        listProductSlice: (state: IProductState, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload
        },
        listProductSaleSlice: (state: IProductState, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload.filter((product) => product && product.discount)
        },
        removeProductSlice: (state: IProductState, action: PayloadAction<string>) => {
            state.products = state.products.filter((pro) => pro._id != action.payload)
        },
        // listProductCategorySlice: (state: IProductCategory, action: PayloadAction<IProductCategory>) => {
        //     const productCategory = action.payload.categoryTerm.trim()
        //     const listProductCategory = action.payload.products.filter((product) => product.categoryId && product.categoryId.includes(productCategory))
        //     console.log(listProductCategory);

        //     state.products = listProductCategory
        // }
    })
})
const productCategorySlice = createSlice({
    name: "products",
    initialState: initialProductCategory,
    reducers: ({
        listProductCategorySlice: (state: IProductCategory, action: PayloadAction<IProductCategory>) => {
            const productCategory = action.payload.categoryTerm.trim()
            const listProductCategory = action.payload.products.filter((product) => product.categoryId && product.categoryId.includes(productCategory))
            console.log(listProductCategory);

            state.products = listProductCategory
        }
    })
})

export const { listProductCategorySlice } = productCategorySlice.actions

export const { listProductSlice, removeProductSlice, listProductSaleSlice } = productSlice.actions
export const productCategoryReducer = productCategorySlice.reducer
export default productSlice.reducer