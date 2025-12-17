import express from 'express';
import { orderControllers } from '../controllers/orderController.js';
import { protect, admin } from '../middleware/auth.js';

const orderRoutes = express.Router();

orderRoutes.post('/create', protect, orderControllers.addOrderItems);

orderRoutes.get('/myorders', protect, orderControllers.getMyOrders);

// orderRoutes.get('/',protect, orderControllers.getOrders);


orderRoutes.get('/:id', protect, orderControllers.getOrderItems);

orderRoutes.put('/:id/pay', protect, orderControllers.updateOrderToPaid);

orderRoutes.put(
	'/:id/deliver',
	protect,
	admin,
	orderControllers.updateOrderToDelivered,
);

orderRoutes.get('/', protect, admin, orderControllers.getOrders);

export default orderRoutes;
