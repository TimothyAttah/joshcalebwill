import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
	try {
		const token = req.cookies.token;
		// const token = req.headers["authorization"].split(' ')[1]

		if (!token) {
			return res.status(401).json({ msg: 'Invalid token' });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		if (!decoded) {
			return res.status(401).json({ msg: 'Invalid token or not valid' });
		}

		req.userId = decoded.userId;
		req.role = decoded.role;
		next();
	} catch (error) {
		console.error('Error while verifying token', error);
		return res.status(401).json({ msg: error.message });
	}
};

