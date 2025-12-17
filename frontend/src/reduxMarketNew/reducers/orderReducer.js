import { ORDER_TYPES } from '../types';

export const order = (state = {}, action) => {
	switch (action.type) {
		case ORDER_TYPES.ORDER_CREATE_SUCCESS:
			return {
				order: action.payload,
			};

		case ORDER_TYPES.ORDER_DETAILS_SUCCESS:
			return {
				orderDetails: action.payload,
			};

		case ORDER_TYPES.ORDER_PAY_SUCCESS:
			return {
				orderPay: action.payload,
			};

		case ORDER_TYPES.ORDER_LIST_MY_ORDER_SUCCESS:
			return {
				ordersListMy: action.payload,
			};

		case ORDER_TYPES.ORDER_LIST_MY_ORDER_RESET:
			return { orders: [] };

		case ORDER_TYPES.ORDER_LIST_ALL_ORDER_SUCCESS:
			return {
				orderLists: action.payload,
			};

		case ORDER_TYPES.ORDER_DELIVER_SUCCESS:
			return {
				orderDeliver: action.payload,
			};

		default:
			return state;
	}
};
