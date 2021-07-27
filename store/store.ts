import { configureStore } from '@reduxjs/toolkit'

import { cartReducer } from './reducers/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch