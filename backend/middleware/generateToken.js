import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const generateToken = async (userId) => {
	try {
		const user = await User.findById(userId);
		if (!user) {
			throw new Error('User not found.');
		}

		const token = jwt.sign(
			{ userId: user._id, role: user.role },
			process.env.JWT_SECRET,
			// { expiresIn: '1d' },
		);

		return token;
	} catch (err) {}
};
