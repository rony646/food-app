import { CartItem, CartState  } from '../types/commonTypes';
import { CartActionTypes, ADD_ITEM, REMOVE_ITEM } from '../actions/cartActions';

const initialCartState: CartState = {
    items: []
}

export function cartReducer(state: CartState = initialCartState, action: CartActionTypes) : CartState {
    switch (action.type) {
        case ADD_ITEM:

            let newItemToAdd: CartItem = {
                title: action.payload.title,
                price: action.payload.price,
                quantity: 1,
                id: action.payload.id
            };

            const indexOfExistingItem = state.items.findIndex(item => item.id === newItemToAdd.id);
            let updatedCartItems = state.items;

            if(indexOfExistingItem !== -1) {
                // Update quantity if item is already in the cart
                updatedCartItems[indexOfExistingItem].quantity = updatedCartItems[indexOfExistingItem].quantity + 1      
            } else {
                updatedCartItems.push(newItemToAdd)
            };

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