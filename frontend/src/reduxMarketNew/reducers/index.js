import { combineReducers } from 'redux';
import { cart } from './cartReducer';
import { user } from './userReducers';
import { products } from './productsReducer';
import { order } from './orderReducer';
import { reviews } from './reviewsReducer';

export const reducers = combineReducers({
	cart,
	user,
	products,
	order,
	reviews
});
