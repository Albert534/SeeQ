import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './slices/loginSlice';
import signUpReducer from './slices/signupSlice';

export const store = configureStore({
	reducer: {
		login: loginReducer,
		signup: signUpReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
