export interface ICart {
    _id?: string
    productId: string
    price: number
    quantity: number
    totalMoney: number
}

export interface ICartState {
    carts: ICart[]
}