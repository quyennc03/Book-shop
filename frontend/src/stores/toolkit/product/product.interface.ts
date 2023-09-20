export interface IProduct {
    _id?: string
    name: string
    price: number
    discount: number
    author: string
    description: string
    image: string
    thumbnail: ArrImage[]
    categoryId: string
}

export interface ArrImage {
    image: string
}

export interface IProductState {
    products: IProduct[]
}

export interface IProductCategory {
    categoryTerm: string
    products: IProduct[]
}