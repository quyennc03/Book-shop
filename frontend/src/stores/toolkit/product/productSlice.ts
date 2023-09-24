import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct, IProductCategory, IProductSearch, IProductState } from "./product.interface"
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
    })
})
const productCategorySlice = createSlice({
    name: "products",
    initialState: initialProductCategory,
    reducers: ({
        listProductsSlice: (state: IProductState, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload
        },
        listProductCateSlice: (state: IProductState, action: PayloadAction<IProduct[]>) => {
            const categoryIndex = action.payload[0].categoryId
            const listProductFilter = action.payload.filter((product) => product.categoryId == categoryIndex)
            state.products = listProductFilter
        },
        listProductFilter: (state: IProductCategory, action: PayloadAction<IProductCategory>) => {
            const productCategory = action.payload.categoryTerm.trim()
            const listProductCategory = action.payload.products.filter((product) => product.categoryId && product.categoryId.includes(productCategory))
            state.products = listProductCategory
        },
        listProductSearchSlice: (state: IProductCategory, action: PayloadAction<IProductSearch>) => {
            const productSearch = action.payload.searchTerm.trim()
            const listProductSearch = action.payload.products.filter((product) => product.name && product.name.toLowerCase().includes(productSearch))
            state.products = listProductSearch
        },
    })
})

export const { listProductFilter, listProductCateSlice, listProductsSlice, listProductSearchSlice } = productCategorySlice.actions

export const { listProductSlice, removeProductSlice, listProductSaleSlice } = productSlice.actions
export const productCategoryReducer = productCategorySlice.reducer
export default productSlice.reducer