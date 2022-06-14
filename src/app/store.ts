import { configureStore } from '@reduxjs/toolkit'
import companyReducer from './features/company/companyReducer'

export const store = configureStore({
	reducer: {
		company: companyReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
