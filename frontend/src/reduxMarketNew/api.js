import axios from 'axios';

// const baseURL = 'http://localhost:5000/api';

const baseURL = 'https://joshcalebwill-jehi.vercel.app/api';

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('token')) {
		req.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
	}

	return req;
	// frontend / src / redux / api.js;
});

export const addTocart = (id) => API.get(`/products/${id}`);

export const createOrder = (order) => API.post(`/orders/create`, order);

export const getOrderDetails = (id) => API.get(`/orders/${id}`);

export const payOrder = (orderId, paymentResult) =>
	API.put(`/orders/${orderId}/pay`, paymentResult);

export const listMyOrders = () => API.get(`/orders/myorders`);

export const listOrders = () => API.get(`/orders`);

export const deliverOrder = (order) =>
	API.put(`/orders/${order._id}/deliver`, {});

// export const listProducts = (keyword = '', pageNumber = '') =>
// 	API.get(`/products?keyword=${keyword}&pageNumber=${pageNumber}`);

export const listProducts = () => API.get(`/products`);

export const listShopProducts = () => API.get(`/products/shop`);

export const listProductDetails = (id) => API.get(`/products/${id}`);

export const deleteProduct = (id) => API.delete(`/products/${id}/delete`);

export const createProduct = (product) =>
	API.post(`/products/create-product`, product);

export const topRatedProduct = () => API.get(`/products/top`);

export const productCreateReviews = (productId, review) =>
	API.post(`/products/${productId}/reviews`, review);

export const updateProduct = (id, product) =>
	API.put(`/products/${id}/update`, product);

export const loginUser = (userData) => API.post('/auth/login', userData);

export const registerUser = (userData) => API.post('/auth/register', userData);

export const logoutUser = () => API.post('/auth/logout');

export const getUserDetails = () => API.get(`/auth/users/profile`);

export const updateUserProfile = (user) =>
	API.put(`/auth/users/edit-profile`, user);

export const listUsers = () => API.get(`/auth/users`);

export const deleteUser = (id) => API.delete(`/auth/users/${id}/delete`);

export const getUserByIdDetails = (id) => API.get(`/auth/users/${id}`);

export const updateUser = (id, user) => API.put(`/auth/users/${id}`, user);

export const postReview = (reviewData) =>
	API.post('/reviews/post-review', reviewData);

export const getAllReviews = () => API.get('/reviews/');
export const getUserReviews = (userId) => API.get(`/reviews/${userId}`);
