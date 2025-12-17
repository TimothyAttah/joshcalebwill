import { CART_TYPES } from '../types';

export const addToCart = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: CART_TYPES.CART_ADD_ITEM,
			payload: id,
		});
		localStorage.setItem('cartItems', JSON.stringify(getState().cart.products));
	} catch (err) {
		console.log(err);
	}
};

export const cartQuantityIncrement =
	(product) => async (dispatch, getState) => {
		try {
			dispatch({
				type: CART_TYPES.CART_QUANTITY_INCREMENT,
				payload: product,
			});
			localStorage.setItem(
				'cartItems',
				JSON.stringify(getState().cart.products),
			);
		} catch (err) {
			console.log(err);
		}
	};

export const cartQuantityDecrement =
	(product) => async (dispatch, getState) => {
		try {
			dispatch({
				type: CART_TYPES.CART_QUANTITY_DECREMENT,
				payload: product,
			});
		} catch (err) {
			console.log(err);
		}
	};

export const cartRemoveItem = (product) => async (dispatch, getState) => {
	try {
		dispatch({
			type: CART_TYPES.CART_REMOVE_ITEM,
			payload: product,
		});
		localStorage.setItem('cartItems', JSON.stringify(getState().cart.products));
	} catch (err) {
		console.log(err);
	}
};

export const saveShippingAddress = (data) => (dispatch) => {
	dispatch({
		type: CART_TYPES.CART_SAVE_SHIPPING_ADDRESS,
		payload: data,
	});

	localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
	dispatch({
		type: CART_TYPES.CART_SAVE_PAYMENT_METHOD,
		payload: data,
	});

	localStorage.setItem('paymentMethod', JSON.stringify(data));
};
// export const updateCartProduct = (_id) => async (dispatch) => {
// 	try {
// 		dispatch({
// 			type: CART_TYPES.CART_UPDATE_ITEM,
// 			payload: _id,
// 		});
// 		console.log(_id);
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
