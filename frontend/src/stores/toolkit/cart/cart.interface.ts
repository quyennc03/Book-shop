export interface ICart {
    _id?: string
    userId?: string
    productId: string
    price: number
    quantity: number
}

export interface ICartState {
    carts: ICart[]
}