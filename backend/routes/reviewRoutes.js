import express from 'express'
import reviewsControllers from '../controllers/reviewsController.js';

const reviewRoutes = express.Router();

reviewRoutes.post('/post-review', reviewsControllers.createReview);
reviewRoutes.get('/total-review', reviewsControllers.getTotalReviews);
reviewRoutes.get('/:userId', reviewsControllers.getReviewsByUserId);



export default reviewRoutes;
