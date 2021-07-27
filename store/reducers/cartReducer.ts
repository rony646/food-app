import { createReducer, createAction } from '@reduxjs/toolkit';

import { Meal } from '../../models/meal';

interface CartState {
    cartItems: Meal[]
}

const initialState = {
    cartItems: []
} as CartState

const addMeal = createAction<Meal>('cart/addMeal');

export const cartReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(addMeal, (state, action) => {
        const updatedCartItems = [...state.cartItems, action.payload]
        state.cartItems = updatedCartItems
    })
})