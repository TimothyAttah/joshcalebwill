import { Router } from 'express';
import Reviews from '../reviews/reviews.model.js';
import Products from '../products/products.model.js';

const reviewsRoutes = Router();

// @desc Create a new review
// @route POST /api/review/post-review
// @access Public
reviewsRoutes.post('/post-review', async (req, res) => {
	try {
		const { comment, rating, productId, userId } = req.body;

		if (!comment || !rating || !productId || !userId) {
			return res.status(400).send({ msg: 'All fields are required' });
		}

		const existingReview = await Reviews.findOne({ productId, userId });
		if (existingReview) {
			// update reviews

			existingReview.comment = comment;
			existingReview.rating = rating;
			await existingReview.save();
		} else {
			// create new review
			const newReview = new Reviews({
				comment,
				rating,
				productId,
				userId,
			});
			await newReview.save();
		}

		//calculate the average rating
		const reviews = await Reviews.find({ productId });
		if (reviews.length > 0) {
			const totalRating = reviews.reduce(
				(acc, review) => acc + review.rating,
				0,
			);
			const averageRating = totalRating / reviews.length;
			const product = await Products.findById(productId);
			if (product) {
				product.rating = averageRating;
				await product.save({ validateBeforeSave: false });
			} else {
				return res.status(404).send({ msg: 'Product not found' });
			}
		}

		return res.status(200).json({
			msg: 'Review processed succesffuly',
			reviews,
		});
	} catch (err) {
		console.log(' Error posting review', err);
		return res.status(500).json({ msg: 'Failed to post review' });
	}
});

// @desc Get total review count
// @route GET /api/review/total-reviews
// @access Public
reviewsRoutes.get('/total-reviews', async (req, res) => {
	try {
		const totalReviews = await Reviews.countDocuments({});

		return res.status(200).json({
			msg: 'Total Review Count',
			totalReviews,
		});
	} catch (err) {
		console.log(' Error getting total review', err);
		return res.status(500).json({ msg: 'Failed to get review count' });
	}
});

// @desc Get review by userId
// @route GET /api/review/userId
// @access Public
reviewsRoutes.get('/:userId', async (req, res) => {
	try {
		const { userId } = req.params;
		if (!userId) {
			return res.status(400).send({ msg: 'User ID is required' });
		}

		const reviews = await Reviews.find({ userId: userId }).sort({
			createdAt: -1,
		});

		if (reviews.length === 0) {
			return res.status(404).send({ msg: 'No reviews found' });
		}

		return res.status(200).json({
			msg: 'Total Review By User',
			reviews,
		});
	} catch (err) {
		console.log(' Error fetching reviews by user', err);
		return res.status(500).json({ msg: 'Failed to fetch reviews by user' });
	}
});
export default reviewsRoutes;
