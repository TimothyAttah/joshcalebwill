import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const protect = async (req, res, next) => {
	const { authorization } = req.headers;
	if (!authorization)
		return res
			.status(403)
			.json({ msg: 'Unauthorized User. Permission Denied.' });

	const token = authorization.replace('Bearer ', '');
	jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
		if (err)
			return res.status(403).json({ msg: 'Unathorized User. Request Denied' });

		const { userId } = payload;

		const userData = await User.findById(userId);
		req.user = userData;
		next();
	});
};

// export const protect = async (req, res, next) => {
// 	let token;

// 	if (
// 		req.headers.authorization &&
// 		req.headers.authorization.startsWith('Bearer')
// 	) {
// 		try {
// 			token = req.headers.authorization.split(' ')[1];

// 			const decoded = jwt.verify(token, process.env.JWT_SECRET);

// 			req.user = await User.findById(decoded.userId).select('-password');

// 			next();
// 		} catch (error) {
// 			console.error(error);
// 			res.status(401);
// 			throw new Error('Not authorized, token failed');
// 		}
// 	}

// 	if (!token) {
// 		res.status(401);
// 		throw new Error('Not authorized, no token');
// 	}
// };

export const admin = (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		return res.status(401).json({ msg: 'Not authorized as an admin' });
	}
};

export const verifyAdmin = (req, res, next) => {
	// if (req.role !== 'admin') {
	// 	return res.status(403).send({
	// 		success: false,
	// 		msg: 'You are not authorized to perform this action',
	// 	});
	// }

	if (req.user && req.user.role === 'admin') {
		next();
	} else {
		return res.status(401).json({ msg: 'Not authorized as an admin' });
	}

	// if (req.role === 'admin') {
	// 	next();
	// } else {
	// 	return res.status(401).json({ msg: 'Not authorized as an admin' });
	// }

	next();
};
