import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
// your-app.js
import Swal from 'sweetalert2';

// your-app.scss

interface UserInfo {
	username: string;
	email: string;
	password: string;
}

export interface UserProcess {
	userInfo: UserInfo[];
	loading: boolean;
	error: string | null;
	status: number | null;
}

const initialState: UserProcess = {
	userInfo: [],
	loading: false,
	error: '',
	status: 0,
};

export const SignUpForm = createAsyncThunk(
	'SignUpForm/userSlice',
	(
		payload: {
			signUpData: UserInfo;
			t: (key: string) => string;
			navigate: NavigateFunction;
		},
		{ rejectWithValue }
	) => {
		const { signUpData, t, navigate } = payload;
		console.log(signUpData);
		return axios
			.post('http://localhost:3000/api/v1/signup', { signUpData })
			.then((response) => {
				console.log('Signup successful:', signUpData);
				setTimeout(() => {
					navigate('/login');
					Swal.fire({
						title: 'Success!',
						text: 'Sign Up Successfully!',
						confirmButtonText: 'Close',
						background: '#1e1e1e',
						color: '#1e1e1e',

						confirmButtonColor: '#1e1e1e',
					});
				}, 1000);

				return response.data;
			})
			.catch((error) => {
				console.error(
					'Error during signup:',
					error.response?.data || error.message
				);

				if (error) {
					if (error.response?.status === 409) {
						return rejectWithValue(t('signup_error.email_existed'));
					}
					if (
						error.response?.status === 500 ||
						error.response?.status === null
					) {
						return rejectWithValue(t('server_error'));
					}
				}
			});
	}
);

export const signUpSlice = createSlice({
	name: 'signup',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(SignUpForm.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				SignUpForm.fulfilled,
				(state, action: PayloadAction<UserInfo>) => {
					state.loading = false;
					state.error = null;
					state.userInfo.push(action.payload);
				}
			)
			.addCase(SignUpForm.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});
export default signUpSlice.reducer;
