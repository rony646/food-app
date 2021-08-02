import { CartItem, CartState  } from '../types/commonTypes';
import { CartActionTypes, ADD_ITEM, REMOVE_ITEM } from '../actions/cartActions';
import { meals } from '../../data/meals';

const initialCartState: CartState = {
    items: [],
    total: 0
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
                updatedCartItems[indexOfExistingItem].price = updatedCartItems[indexOfExistingItem].price + action.payload.price  
            } else {
                updatedCartItems.push(newItemToAdd)
            };

            return {
                ...state,
                items: updatedCartItems,
                total: state.total + action.payload.price
            }
        case REMOVE_ITEM:
            const indexOfDeletedItem = state.items.findIndex(item => item.id === action.payload.id)
            const initialPrice = meals.find(meal => meal.id === action.payload.id)?.price
            const price = initialPrice ? initialPrice : 0;
            let updatedTotal = state.total;

            let updatedItems;
            if(state.items[indexOfDeletedItem].quantity >= 1) {
                console.log("Entrei")
               
                updatedItems = state.items
                updatedItems[indexOfDeletedItem].quantity =  updatedItems[indexOfDeletedItem].quantity - 1
                updatedItems[indexOfDeletedItem].price =  updatedItems[indexOfDeletedItem].price - price
                if(updatedTotal <= 0) {
                    updatedTotal = 0
                } else {
                    updatedTotal = state.total - price
                }
            } else {
                updatedItems = state.items.splice(indexOfDeletedItem, 1)
            }
            return {
                ...state,
                items: updatedItems,
                total: updatedTotal
            }
        default:
            return state
    }
};