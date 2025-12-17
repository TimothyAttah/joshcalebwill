import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl } from '../../../utils/baseURI';

const orderApi = createApi({
	reducerPath: 'orderApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${getBaseUrl()}/api/orders`,
		credentials: 'include',
		prepareHeaders: (headers) => {
			const token = localStorage.getItem('token');
			console.log('Token for order', token);

			if (token) {
				headers.set('Authorization', `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ['Orders'],
	endpoints: (builder) => ({
		createOrder: builder.mutation({
			query: (newOrder) => ({
				url: '/create',
				method: 'POST',
				body: newOrder,
			}),
		}),
		fetchOrderById: builder.query({
			query: (id) => `/${id}`,
			providesTags: (result, error, id) => [{ type: 'Orders', id }],
		}),
		updatePayOrder: builder.mutation({
			query: ({ id, ...rest }) => ({
				url: `/${id}/pay`,
				method: 'PUT',
				body: rest,
				credentials: 'include',
			}),
			invalidatesTags: ['Orders'],
		}),
	}),
});

export const { useCreateOrderMutation, useFetchOrderByIdQuery, useUpdatePayOrderMutation } = orderApi;
export default orderApi;
