import * as api from '../api';
import { ORDER_TYPES } from '../types';
import { toast } from 'react-toastify';

export const createOrder = (order) => async (dispatch, getState) => {
	try {
		const { data } = await api.createOrder(order);

		console.log('orders creating >>>', data);

		dispatch({
			type: ORDER_TYPES.ORDER_CREATE_SUCCESS,
			payload: data.data,
		});
		toast.success(data.msg);
		window.location.href = `/market/order/${data.data._id}`;
	} catch (err) {
		toast.error(
			err.response && err.response.data.msg
				? err.response.data.msg
				: err.message,
		);
	}
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
	try {
		const { data } = await api.getOrderDetails(id);

		console.log('orders lists >>>', data);

		dispatch({
			type: ORDER_TYPES.ORDER_DETAILS_SUCCESS,
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

export const payOrder =
	(orderId, paymentResult) => async (dispatch, getState) => {
		try {
			const { data } = await api.payOrder(orderId, paymentResult);

			console.log('orders payment >>>', data);

			dispatch({
				type: ORDER_TYPES.ORDER_PAY_SUCCESS,
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

export const listMyOrders = () => async (dispatch) => {
	try {
		const { data } = await api.listMyOrders();

		console.log('my orders lists >>>', data);

		dispatch({
			type: ORDER_TYPES.ORDER_LIST_MY_ORDER_SUCCESS,
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

export const listOrders = () => async (dispatch) => {
	try {
		const { data } = await api.listOrders();

		console.log('all orders lists >>>', data);

		dispatch({
			type: ORDER_TYPES.ORDER_LIST_ALL_ORDER_SUCCESS,
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

export const deliverOrder = (order) => async (dispatch) => {
	try {
		const { data } = await api.deliverOrder(order);

		console.log('all orders lists >>>', data);

		dispatch({
			type: ORDER_TYPES.ORDER_DELIVER_SUCCESS,
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
