export interface IFeedBack {
    _id?: string
    userId: string
    productId: string
    comment: string
    status: number
}

export interface IFeedBackState {
    feedBacks: IFeedBack[]
}