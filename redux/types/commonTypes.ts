
export type CartItem =  {
    title: string,
    price: number,
    quantity: number,
    id: string
}

export interface CartState {
    items: CartItem[]
}