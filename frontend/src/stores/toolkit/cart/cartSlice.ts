import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ICart, ICartState } from "./cart.interface"
import { useFetchListProductQuery, useFetchOneProductQuery } from "../product/product.service"
import { useAddCartMutation } from "./cart.service"

export const initalCartState: ICartState = {
    carts: []
}

const cartSlice = createSlice({
    name: "carts",
    initialState: initalCartState,
    reducers: ({
        listCartSlice: (state: ICartState, action: PayloadAction<ICart[]>) => {
            const userLocal = JSON.parse(localStorage.getItem("user")!)
            if (userLocal) {
                const cartByUser = action?.payload?.filter((cart) => cart.userId == userLocal._id)
                state.carts = cartByUser
            } else {
                state.carts = []
            }

        },
        addCartSlice: (state: ICartState, action: PayloadAction<ICart>) => {
            const cartExistIndex = state.carts.findIndex((cart) => cart.productId === action.payload.productId);
            if (cartExistIndex !== -1) {
                // Sản phẩm đã tồn tại trong giỏ hàng, tăng quantity
                state.carts[cartExistIndex].quantity += action.payload.quantity;
            } else {
                // Sản phẩm chưa tồn tại trong giỏ hàng, thêm vào giỏ hàng
                state.carts = [
                    ...state.carts,
                    {
                        userId: action.payload.userId,
                        productId: action.payload.productId,
                        price: action.payload.price,
                        quantity: action.payload.quantity,
                    },
                ];
            }
            localStorage.setItem("cart", JSON.stringify(state.carts))
            const local = JSON.parse(localStorage.getItem("cart")!)
            console.log(local);
        },
        deleteCartSlice: (state: ICartState, action: PayloadAction<string>) => {
            state.carts = state.carts.filter((cart) => cart._id != action.payload)
            console.log(state.carts);

        }
    })
})

export const { listCartSlice, addCartSlice, deleteCartSlice } = cartSlice.actions

export default cartSlice.reducer