import { CART_TYPES } from '../types';

// Hello, I'm trying to create a addToCart funtionality with the normal react-redux const initialState = { products: [], selectedItems: 0, totalPrice: 0, tax: 0, taxRate: 0.05, grandTotal: 0, }; But I'm having trouble getting calculating the rest of the state but im getting the product but can't get the selectedItems, totalPrice, tax, and grandTotal. Can you help me

const initialState = {
	products: [],
	shippingAddress: {},
	paymentMethod: ''
};

export const cart = (state = initialState, action) => {
	switch (action.type) {
		case CART_TYPES.CART_ADD_ITEM:
			const isExist = state.products.find(
				(product) => product._id === action.payload._id,
			);
			const updatedProducts = [...state.products];

			if (isExist) {
				alert('Item is already in the cart');
				return;
			}

			// if (!isExist) {
			// 	updatedProducts.push({ ...action.payload, quatity: 1 });
			// } else {
			// 	console.log('Items already added');
			// }

			return {
				...state,
				products: [...state.products, { ...action.payload, quantity: 1 }],
			};

		case CART_TYPES.CART_QUANTITY_INCREMENT:
			const updatedCartProducts = state.products.map((item) =>
				item._id === action.payload._id
					? { ...item, quantity: item.quantity + 1 }
					: item,
			);
			return {
				...state,
				products: updatedCartProducts,
			};

		case CART_TYPES.CART_QUANTITY_DECREMENT:
			return {
				...state,
				products: state.products.map((item) =>
					item._id === action.payload._id && item.quantity > 1
						? { ...item, quantity: item.quantity - 1 }
						: item,
				),
			};

		case CART_TYPES.CART_REMOVE_ITEM:
			return {
				...state,
				products: state.products.filter(
					(item) => item._id !== action.payload._id,
				),
			};

		case CART_TYPES.CART_SAVE_SHIPPING_ADDRESS:
			return {
				...state,
				shippingAddress: action.payload,
			};

		case CART_TYPES.CART_SAVE_PAYMENT_METHOD:
			return {
				...state,
				paymentMethod: action.payload,
			};

		// case CART_TYPES.CART_UPDATE_ITEM:
		// 	const { _id, type } = action.payload;

		// const updatedCartProducts = state.products
		// 	.map((product) => {
		// 		if (product._id === _id) {
		// 			const newQty =
		// 				type === 'increment' ? product.quatity + 1 : product.quatity - 1;

		// 			return newQty > 0 ? { ...product, quatity: newQty } : null;
		// 		}

		// 		return product;
		// 	})
		// 	.filter(Boolean);

		// const updatedCartProducts = state.products.map((product) => {
		// 	product._id === action.payload._id
		// 		? { ...product, quatity: product.quatity + 1 }
		// 		: product;
		// });

		// return {
		// 	...state,
		// 	products: updatedCartProducts,
		// };

		// const updatedSelectedItems = updatedProducts.reduce(
		// 	(total, product) => total + product.quatity,
		// 	0,
		// );

		// const updatedTotalPrice = updatedProducts.reduce(
		// 	(total, product) => total + product.price * product.quatity,
		// 	0,
		// );

		// const updatedTax = updatedTotalPrice * state.taxRate;

		// const updatedGrandTotal = updatedTotalPrice + updatedTax;

		// return {
		// 	...state,
		// 	// products: updatedCartProducts,
		// 	selectedItems: updatedSelectedItems,
		// 	totalPrice: updatedTotalPrice,
		// 	tax: updatedTax,
		// 	grandTotal: updatedGrandTotal,
		// };

		// return {
		// 	...state,
		// 	selectedItems: products,
		// };

		default:
			return state;
	}
};
