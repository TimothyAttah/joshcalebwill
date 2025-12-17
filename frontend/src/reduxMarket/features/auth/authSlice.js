import { createSlice } from '@reduxjs/toolkit';

const loadUserFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem('user');
		if (serializedState === null) return null;
		return { user: JSON.parse(serializedState) };
	} catch (err) {
		return null
	}
};
// const initialState = loadUserFromLocalStorage();
const initialUser = loadUserFromLocalStorage();
const initialToken = localStorage.getItem('token') || null;

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: initialUser,
		token: initialToken,
	},
	reducers: {
		setUser: (state, action) => {
			console.log('sate>>', state);

			state.user = action.payload.user;
			localStorage.setItem('user', JSON.stringify(state.user));
		},

		setToken: (state, action) => {
			state.token = action.payload.token;
			localStorage.setItem('token', state.token);
		},

		logout: (state) => {
			state.user = null;
			localStorage.removeItem('user');
		},

		clearToken: (state) => {
			state.token = null;
			localStorage.removeItem('token');
		},
	},
});

export const { setUser, logout, setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
