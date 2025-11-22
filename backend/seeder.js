import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/newProducts.js';
import User from './src/users/user.model.js';
import Product from './src/products/products.model.js';
// import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		// await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);

		const adminUser = createdUsers[0]._id;

		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});

		await Product.insertMany(sampleProducts);

		console.log('Data Imported');
		process.exit;
	} catch (err) {
		console.log(err.message);
	}
};

const destroyData = async () => {
	try {
		// await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		console.log('Data Destroyed');
		process.exit;
	} catch (err) {
		console.log(err.message);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
