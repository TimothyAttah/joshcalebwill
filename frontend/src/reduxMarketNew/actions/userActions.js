import { USER_TYPES, ORDER_TYPES, CART_TYPES } from '../types';
import * as api from '../api';
import { toast } from 'react-toastify';

export const login = (userData) => async (dispatch, getState) => {
	try {
		const { data } = await api.loginUser(userData);

		console.log('login>>>', data);

		dispatch({
			type: USER_TYPES.USER_LOGIN_SUCCESS,
			payload: data.user,
		});

		localStorage.setItem('token', data.token);
		localStorage.setItem('user', JSON.stringify(data.user));

		localStorage.setItem('user', JSON.stringify(getState().user));
		toast.success(data.msg);
	} catch (err) {
		console.log(err.message);
		toast.error(
			err.response && err.response.data.msg
				? err.response.data.msg
				: err.message,
		);
	}
};

export const logoutUser = () => async (dispatch) => {
	try {
		const { data } = await api.logoutUser();
		localStorage.removeItem('user');
		localStorage.removeItem('token');

		toast.success(data.msg);
		window.location.href = '/market';
	} catch (err) {
		toast.error(
			err.response && err.response.data.msg
				? err.response.data.msg
				: err.message,
		);
	}
};

export const register = (userData) => async (dispatch, getState) => {
	try {
		const { data } = await api.registerUser(userData);

		dispatch({
			type: USER_TYPES.USER_REGISTER_SUCCESS,
			payload: data.user,
		});

		// localStorage.setItem('token', data.token);
		// localStorage.setItem('user', JSON.stringify(data.user));

		// localStorage.setItem('user', JSON.stringify(getState().user));
		toast.success(data.msg);
	} catch (err) {
		console.log(err.message);
		toast.error(
			err.response && err.response.data.msg
				? err.response.data.msg
				: err.message,
		);
	}
};

export const getUserDetails = () => async (dispatch) => {
	try {
		const { data } = await api.getUserDetails();
		dispatch({
			type: USER_TYPES.USER_DETAILS_SUCCESS,
			payload: data.user,
		});

		console.log(data);
	} catch (err) {
		toast.error(
			err.response && err.response.data.msg
				? err.response.data.msg
				: err.message,
		);
	}
};

export const updateUserProfile = (user) => async (dispatch) => {
	try {
		const { data } = await api.updateUserProfile(user);

		console.log('user profile update>>>', data);

		dispatch({
			type: USER_TYPES.USER_UPDATE_PROFILE_SUCCESS,
			payload: data.data,
		});

		toast.success(data.msg);
	} catch (err) {
		toast.error(
			err.response && err.response.data.msg
				? err.response.data.msg
				: err.message,
		);
	}
};

export const listUsers = () => async (dispatch) => {
	try {
		const { data } = await api.listUsers();

		console.log('user profile LIST >>>>>>>>', data);

		dispatch({
			type: USER_TYPES.USER_LIST_SUCCESS,
			payload: data.users,
		});
	} catch (err) {
		toast.error(
			err.response && err.response.data.msg
				? err.response.data.msg
				: err.message,
		);
	}
};

export const deleteUser = (id) => async (dispatch) => {
	try {
		const { data } = await api.deleteUser(id);

		console.log('user delete action >>>>>>>>', data);

		dispatch({
			type: USER_TYPES.USER_DELETE_SUCCESS,
			payload: id,
		});
		toast.success(data.msg);
	} catch (err) {
		toast.error(
			err.response && err.response.data.msg
				? err.response.data.msg
				: err.message,
		);
	}
};

export const getUserByIdDetails = (id) => async (dispatch) => {
	try {
		const { data } = await api.getUserByIdDetails(id);

		console.log('user by id details>>>', data);

		dispatch({
			type: USER_TYPES.USER_GET_BY_ID_SUCCESS,
			payload: data.data,
		});
	} catch (err) {
		toast.error(
			err.response && err.response.data.msg
				? err.response.data.msg
				: err.message,
		);
	}
};

export const updateUser = (id, user) => async (dispatch) => {
	try {
		const { data } = await api.updateUser(id, user);

		console.log('user update details>>>', data);

		dispatch({
			type: USER_TYPES.USER_UPDATE_SUCCESS,
			payload: data.data,
		});
		toast.success(data.msg);
	} catch (err) {
		toast.error(
			err.response && err.response.data.msg
				? err.response.data.msg
				: err.message,
		);
	}
};
