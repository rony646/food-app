import { CartState  } from '../types/commonTypes';
import { CartActionTypes, ADD_ITEM, REMOVE_ITEM } from '../actions/cartActions';

const initialCartState: CartState = {
    items: []
}

export function cartReducer(state: CartState = initialCartState, action: CartActionTypes) : CartState {
    switch (action.type) {
        case ADD_ITEM:
            // todo: check if the item is already in the cart and update the price
            const updatedCartItems = state.items
            updatedCartItems.push({
                title: action.payload.title,
                price: action.payload.price.toString(),
                quantity: 1,
                id: action.payload.id
            })
            return {
                ...state,
                items: updatedCartItems
            }
        case REMOVE_ITEM:
            const indexOfDeletedItem = state.items.findIndex(item => item.id === action.payload.id)
            const updatedItems = state.items.splice(indexOfDeletedItem, 1)
            return {
                ...state,
                items: updatedItems
            }
        default:
            return state
    }
};