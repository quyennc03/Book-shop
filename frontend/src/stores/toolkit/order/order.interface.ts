export interface IOrder {
    _id?: string
    userId: string
    fullName: string
    email: string
    phoneNumber: string
    address: string
    vouchers: voucherArr[]
    note: string
    status: number
    totalMoney: number
}

export interface IOrderState {
    orders: IOrder[]
}
export interface voucherArr {
    code: string
}