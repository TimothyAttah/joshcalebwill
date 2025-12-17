import { PRODUCT_TYPES } from '../types';
import * as api from '../api';
import { toast } from 'react-toastify';

export const createReview = (reviewData) => async (dispatch) => {
  try
  {
    const { data } = await api.postReview(reviewData);
    dispatch({
      type: PRODUCT_TYPES.PRODUCT_CREATE_REVIEW_SUCCESS,
      payload: data.data
    })

    console.log(data);
    toast.success(data.msg)

	} catch (err) {
		toast.error(
			err.response && err.response.data.msg
				? err.response.data.msg
				: err.message,
		);
	}
};


export const listAllReviews = () => async (dispatch) => {
	try {
		const { data } = await api.getAllReviews();
		dispatch({
			type: PRODUCT_TYPES.PRODUCT_LISTS_REVIEW_SUCCESS,
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

export const listUserReviews = (userId) => async (dispatch) => {
	try {
		const { data } = await api.getUserReviews(userId);
		dispatch({
			type: PRODUCT_TYPES.PRODUCT_LISTS_USER_REVIEW_SUCCESS,
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
