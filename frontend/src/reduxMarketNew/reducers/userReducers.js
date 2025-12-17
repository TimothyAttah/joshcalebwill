import { USER_TYPES } from '../types';

const initialState = {
	user: [],
};

export const user = (state = {}, action) => {
	switch (action.type) {
		case USER_TYPES.USER_LOGIN_SUCCESS:
		case USER_TYPES.USER_REGISTER_SUCCESS:
			return {
				...state,
				user: action.payload,
			};

		case USER_TYPES.USER_DETAILS_SUCCESS:
		case USER_TYPES.USER_UPDATE_PROFILE_SUCCESS:
			return {
				...state,
				user: action.payload,
			};

		case USER_TYPES.USER_DETAILS_RESET:
			return { user: {} };

		case USER_TYPES.USER_LIST_SUCCESS:
			return {
				usersList: action.payload,
			};

		case USER_TYPES.USER_DELETE_SUCCESS:
			return {
				usersList: state.usersList.filter(
					(user) => user._id !== action.payload,
				),
			};

		case USER_TYPES.USER_GET_BY_ID_SUCCESS:
			return {
				userDetails: action.payload,
			};

		case USER_TYPES.USER_UPDATE_SUCCESS:
			return {
				userUpdate: action.payload,
			};
		default:
			return state;
	}
};
