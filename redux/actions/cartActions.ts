export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"

import { Meal } from '../../models/meal';

interface AddItemAction {
    type: typeof ADD_ITEM,
    payload: Meal
}

interface RemoveItemAction {
    type: typeof REMOVE_ITEM
    payload: {
        id: string
    }
}

export type CartActionTypes = AddItemAction | RemoveItemAction