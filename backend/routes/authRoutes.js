import express from 'express';
import { authControllers } from '../controllers/authController.js';
import { protect, admin, verifyAdmin } from '../middleware/auth.js';
import { verifyToken } from '../middleware/verifyToken.js';

const authRoutes = express.Router();

authRoutes.post('/register', authControllers.registerUser);

authRoutes.post('/login', authControllers.loginUser);

authRoutes.get('/users/profile', protect, authControllers.getUserProfile);

authRoutes.put('/users/edit-profile', protect, authControllers.updateUserProfile);

authRoutes.get('/users',protect, admin, authControllers.getAllUsers);

authRoutes.delete(
	'/users/:id/delete',
	protect,
	admin,
	authControllers.deleteUser,
);

authRoutes.get('/users/:id', protect,admin, authControllers.getUserById);

authRoutes.put('/users/:id', protect, admin, authControllers.updateUser);

authRoutes.put('/users/role/:id',  authControllers.updateUserRole);


authRoutes.post('/logout', authControllers.logoutUser);

export default authRoutes;
