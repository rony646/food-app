import { CartState } from '../types/commonTypes';
import { CartActionTypes, ADD_ITEM, REMOVE_ITEM } from '../actions/cartActions';

const initialCartState: CartState = {
    items: []
}

export function cartReducer(state: CartState = initialCartState, action: CartActionTypes) : CartState {
    switch (action.type) {
        case ADD_ITEM:
            const updatedCartItems = state.items
            updatedCartItems.push(action.payload)
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