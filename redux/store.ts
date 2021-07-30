import { createStore } from 'redux';

import { cartReducer } from './reducers/cartReducer';

export const store = createStore(cartReducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
