
export type CartItem =  {
    title: string,
    price: string,
    quantity: number,
    id: string
}

export interface CartState {
    items: CartItem[]
}