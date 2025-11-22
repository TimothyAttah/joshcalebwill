import { Router } from 'express';
import Products from './products.model.js';
import Reviews from '../reviews/reviews.model.js';
import verifyToken from '../middlewares/verifyToken.js';
import verifyAdmin from '../middlewares/verifyAdmin.js';

const productRoutes = Router();

// @desc Create a product
// @route POST /api/products/create-product
// @access Public
productRoutes.post('/create-product', async (req, res) => {
	try {
		const newProduct = new Products({
			...req.body,
		});
		const savedProduct = await newProduct.save();
		//calculate review
		const reviews = await Reviews.find({ productId: savedProduct._id });
		if (reviews.length > 0) {
			const totalRating = reviews.reduce(
				(acc, review) => acc + review.rating,
				0,
			);
			const averageRating = totalRating / reviews.length;
			savedProduct.rating = averageRating;
			await savedProduct.save();
		}
		return res
			.status(201)
			.json({ msg: 'New product added succesffuly', savedProduct });
	} catch (err) {
		console.log(' Error creating new product', err);
		return res.status(500).json({ msg: err.message });
	}
});

// @desc get all products
// @route POST /api/products
// @access Public
productRoutes.get('/', async (req, res) => {
	try {
		const {
			category,
			color,
			minPrice,
			maxPrice,
			page = 1,
			limit = 10,
		} = req.query;
		let filter = {};
		if (category && category !== 'all') {
			filter.category = category;
		}

		if (color && color !== 'all') {
			filter.color = color;
		}
		if (minPrice && maxPrice) {
			const min = parseFloat(minPrice);
			const max = parseFloat(maxPrice);
			if (!isNaN(min) && !isNaN(max)) {
				filter.price = { $gte: min, $lte: max };
			}
		}
		const skip = (parseInt(page) - 1) * parseInt(limit);
		const totalProducts = await Products.countDocuments(filter);
		const totalPages = Math.ceil(totalProducts / parseInt(limit));
		const products = await Products.find(filter)
			.skip(skip)
			.limit(parseInt(limit))
			.populate('author', 'email')
			.sort({ createdAt: -1 });

		return res
			.status(200)
			.json({ msg: 'All products', products, totalPages, totalProducts });
	} catch (err) {
		console.log(' Error fetching products', err);
		return res.status(500).json({ msg: err.message });
	}
});

// @desc get single product
// @route POST /api/products/:id
// @access Public
productRoutes.get('/:id', async (req, res) => {
	try {
		const productId = req.params.id;
		const product = await Products.findById(productId).populate(
			'author',
			'email name',
		);
		if (!product) {
			return res.status(404).json({ msg: 'Product not found' });
		}

		const reviews = await Reviews.find({ productId }).populate(
			'userId',
			'name email',
		);

		return res.status(200).json({ msg: 'Single product', product, reviews });
	} catch (err) {
		console.log(' Error fetching product', err);
		return res.status(500).json({ msg: err.message });
	}
});

// @desc update a product
// @route POST /api/products/update-product/:id
// @access Private
productRoutes.patch('/update-product/:id', verifyToken, verifyAdmin, async (req, res) => {
	try {
		const productId = req.params.id;
		const updatedProduct = await Products.findByIdAndUpdate(
			productId,
			{ ...req.body },
			{ new: true },
		);

		if (!updatedProduct) {
			return res.status(404).json({ msg: 'Product not found' });
		}

		return res
			.status(200)
			.json({ msg: 'Product updated successfully', product: updatedProduct });
	} catch (err) {
		console.log(' Error updating the product', err);
		return res.status(500).json({ msg: err.message });
	}
});

// @desc get single product
// @route POST /api/products/:id
// @access Public
productRoutes.delete('/:id', async (req, res) => {
	try {
		const productId = req.params.id;
		const deletedProduct = await Products.findByIdAndDelete(productId);

		if (!deletedProduct) {
			return res.status(404).json({ msg: 'Product not found' });
		}

		//delete reviews related to the product
		await Reviews.deleteMany({ productId: productId });

		return res.status(200).json({ msg: 'Product deleted successfully' });
	} catch (err) {
		console.log(' Error deleting product', err);
		return res.status(500).json({ msg: 'Failed to delete the product' });
	}
});

// @desc get related product
// @route POST /api/products/related/:id
// @access Public
productRoutes.get('/related/:id', async (req, res) => {
	try {
		const { id } = req.params;
		if (!id) {
			return res.status(400).json({ msg: 'Product ID is required' });
		}

		const product = await Products.findById(id);
		if (!product) {
			return res.status(404).json({ msg: 'Product not found' });
		}

		const titleRegex = new RegExp(
			product.name
				.split(' ')
				.filter((word) => word.length > 1)
				.join('|'),
			'i',
		);

		const relatedProducts = await Products.find({
			_id: { $ne: id }, // Exclude the current product
			$or: [
				{ name: { $regex: titleRegex } }, // Match similar names
				{ category: product.category }, // Match the same category
			],
		});

		return res
			.status(200)
			.json({ msg: 'All related products', relatedProducts });
	} catch (err) {
		console.log(' Error fetching the related products', err);
		return res.status(500).json({ msg: 'Failed to related products' });
	}
});
export default productRoutes;
