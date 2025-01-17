import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface UserInfo {
	username: string;
	email: string;
	password: string;
	loading: boolean;
	error: '';
}

const initialState: UserInfo = {
	username: '',
	email: '',
	password: '',
	loading: false,
	error: '',
};
