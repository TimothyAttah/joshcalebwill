import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl } from '../../../utils/baseURI';
import { setToken } from './authSlice';

const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${getBaseUrl()}/api/auth`,
		credentials: 'include',

		// prepareHeaders: (headers) => {
		// 	const token = document.cookie
		// 		.split('; ')
		// 		.find(row => row.startsWith('token='))
		//  	?.split('=')[1];

		// 	const token = document.cookie;

		// 	if (document.cookie.includes('token')) {
		// 		console.log('document.cookie');
		// 	}

		// 	if (token) {
		// 		headers.set('Authorization', `Bearer ${token}`);
		// 	}

		// 	return headers;
		// },

		// prepareHeaders: (headers, { getState }) => {
		// 	const token = getState().auth.token;
		// 	if (token) {
		// 		headers.set('Authorization', `Bearer ${token}`);
		// 	}

		// 	return headers;
		// },

		prepareHeaders: (headers) => {
			const token = localStorage.getItem('token');
			if (token) {
				headers.set('Authorization', `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ['User'],
	endpoints: (builder) => ({
		registerUser: builder.mutation({
			query: (newUser) => ({
				url: '/register',
				method: 'POST',
				body: newUser,
			}),
		}),
		loginUser: builder.mutation({
			query: (credentials) => ({
				url: '/login',
				method: 'POST',
				body: credentials,
			}),
		}),
		logoutUser: builder.mutation({
			query: () => ({
				url: '/logout',
				method: 'POST',
			}),
		}),
		getUser: builder.mutation({
			query: () => ({
				url: '/users',
				method: 'GET',
			}),
			refetchOnMount: true,
			invalidatesTags: ['Users'],
		}),
		getUserDetails: builder.query({
			query: () => ({
				url: `/users/profile`,
				method: 'GET',
			}),
			providesTags: ['Users'],
		}),
		// fetchAllTrendingProducts: builder.query({
		// 	query: () => '/',
		// 	providesTags: ['Products'],
		// }),
		updateUserDetails: builder.mutation({
			query: () => ({
				url: `/users/edit-profile`,
				method: 'PUT',
			}),
			refetchOnMount: true,
			invalidatesTags: ['Users'],
		}),
		deleteUser: builder.mutation({
			query: (userId) => ({
				url: `/users/${userId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['User'],
		}),
		updateUserRole: builder.mutation({
			query: (userId, role) => ({
				url: `/users/${userId}`,
				method: 'PUT',
				body: { role },
			}),
			refetchOnMount: true,
			invalidatesTags: ['User'],
		}),
		editProfile: builder.mutation({
			query: (profileData) => ({
				url: `/users/edit-profile`,
				method: 'PUT',
				body: profileData,
			}),
			refetchOnMount: true,
			invalidatesTags: ['User'],
		}),
	}),
});

export const {
	useRegisterUserMutation,
	useLoginUserMutation,
	useLogoutUserMutation,
	useGetUserMutation,
	useDeleteUserMutation,
	useUpdateUserRoleMutation,
	useEditProfileMutation,

	useGetUserDetailsQuery,
} = authApi;

export default authApi;
