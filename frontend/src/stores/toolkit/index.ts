import { configureStore } from '@reduxjs/toolkit'
import productAPI from './product/product.service'
import productSlice, { productCategoryReducer } from './product/productSlice'
import categorySlice from './category/categorySlice'
import categoryAPI from './category/category.service'


export const store = configureStore({
    reducer: {
        [productAPI.reducerPath]: productAPI.reducer,
        [categoryAPI.reducerPath]: categoryAPI.reducer,
        productSlice: productSlice,
        productCategorySlice: productCategoryReducer,
        categorySlice: categorySlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productAPI.middleware).concat(categoryAPI.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch