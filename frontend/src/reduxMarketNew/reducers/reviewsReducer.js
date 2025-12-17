import { PRODUCT_TYPES } from '../types';

const initialState = {
	reviews: [],
};

export const reviews = (state = initialState, action) => {
	switch (action.payload) {
		case PRODUCT_TYPES.PRODUCT_CREATE_REVIEW_SUCCESS:
			return {
				reviews: [action.payload, ...state.reviews],
			};
		case PRODUCT_TYPES.PRODUCT_LISTS_REVIEW_SUCCESS:
			return {
				reviews: action.payload,
			};

		case PRODUCT_TYPES.PRODUCT_LISTS_USER_REVIEW_SUCCESS:
			return {
				reviews: action.payload,
			};

		default:
			return state;
	}
};
