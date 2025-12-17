import { PRODUCT_TYPES } from '../types';

const initialState = {
	products: [],
};

export const products = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_TYPES.PRODUCT_LIST_SUCCESS:
			return {
				...state,
				products: action.payload,
			};

		case PRODUCT_TYPES.PRODUCT_SHOP_SUCCESS:
			return {
				...state,
				productsShop: action.payload,
			};

		case PRODUCT_TYPES.PRODUCT_DETAILS_SUCCESS:
			return {
				...state,
				product: action.payload,
			};
		case PRODUCT_TYPES.PRODUCT_DELETE_SUCCESS:
			return {
				...state,
				products: state.products.filter(
					(product) => product._id !== action.payload,
				),
			};

		case PRODUCT_TYPES.PRODUCT_UPDATE_SUCCESS:
			return {
				...state,
				products: state.products.map((product) =>
					product._id === action.payload._id ? action.payload : product,
				),
			};

		case PRODUCT_TYPES.PRODUCT_CREATE_REQUEST:
			return {
				...state,
				products: [action.payload, ...state.products],
			};
		default:
			return state;
	}
};
