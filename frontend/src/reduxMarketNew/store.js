import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { reducers } from './reducers';

const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const usersFromStorage = localStorage.getItem('user')
	? JSON.parse(localStorage.getItem('user'))
	: {};

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
	? JSON.parse(localStorage.getItem('shippingAddress'))
	: {};

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
	? localStorage.getItem('paymentMethod')
	: '';

const initialState = {
	cart: {
		products: cartItemsFromStorage,
		shippingAddress: shippingAddressFromStorage,
		paymentMethod: paymentMethodFromStorage,
	},
	user: usersFromStorage,
};
const middlewares = [thunk];

export const store = createStore(
	reducers,
	initialState,
	applyMiddleware(composeWithDevTools(...middlewares)),
);
