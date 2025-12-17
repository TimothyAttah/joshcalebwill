import { PRODUCT_TYPES } from '../types';
import * as api from '../api';
import { toast } from 'react-toastify';

export const getAllProducts = () => async (dispatch, getState) => {
	try {
		const { data } = await api.listProducts();

		dispatch({
			type: PRODUCT_TYPES.PRODUCT_LIST_SUCCESS,
			payload: data.products,
		});
	} catch (err) {
		console.log(err.message);
		toast.error(
			err.response && err.response.data.msg
				? err.response.data.msg
				: err.message,
		);
	}
};

export const getShopProducts = () => async (dispatch) => {
	try {
		const { data } = await api.listShopProducts();

		dispatch({
			type: PRODUCT_TYPES.PRODUCT_SHOP_SUCCESS,
			payload: data
		});

		console.log('shop product action', data);

	} catch (err) {
		console.log(err.message);
		toast.error(
			err.response && err.response.data.msg
				? err.response.data.msg
				: err.message,
		);
	}
};

export const getProductDetails = (id) => async (dispatch, getState) => {
	try {
		const { data } = await api.listProductDetails(id);

		dispatch({
			type: PRODUCT_TYPES.PRODUCT_DETAILS_SUCCESS,
			payload: data.data,
		});

		console.log(data.data);
	} catch (err) {
		console.log(err.message);
		toast.error(
			err.response && err.response.data.msg
				? err.response.data.msg
				: err.message,
		);
	}
};

export const deleteProduct = (id) => async (dispatch) => {
	try {
		const { data } = await api.deleteProduct(id);

		console.log('products delete action >>>', data);

		dispatch({
			type: PRODUCT_TYPES.PRODUCT_DELETE_SUCCESS,
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

export const updateProduct = (id, product) => async (dispatch) => {
	try {
		const { data } = await api.updateProduct(id, product);

		console.log('products update action >>>', data);

		dispatch({
			type: PRODUCT_TYPES.PRODUCT_DELETE_SUCCESS,
			payload: data.product,
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

export const createProduct = ( product) => async (dispatch) => {
	try {
		const { data } = await api.createProduct(product)

		console.log('products create action >>>', data);

		dispatch({
			type: PRODUCT_TYPES.PRODUCT_CREATE_REQUEST,
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
